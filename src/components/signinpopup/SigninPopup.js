import React, { useState } from 'react';
import PopupWithForm from '../popupwithform/PopupWithForm';
import './SigninPopup.css';

const SigninPopup = (props) => {
  const [inputValues, setInputValues] = useState({
    email: { value: '', validationMessage: true },
    password: { value: '', validationMessage: true },
    isFormValid: false,
  });

  const handleInputChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: {
        value: e.target.value,
        validationMessage: e.target.validationMessage,
        isValid: !e.target.validationMessage,
      },
      isFormValid:
        !e.target.validationMessage &&
        !Object.keys(inputValues).some((key) => {
          if (key !== e.target.name && key !== 'isFormValid') {
            return inputValues[key].validationMessage;
          }
          return false;
        }),
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({ email: inputValues.email.value, password: inputValues.password.value });
  };
  return (
    <>
      <PopupWithForm
        name='profile'
        title='Вход'
        isOpen={props.isOpen}
        onClose={props.onClose}
        button='Войти'
        underButton='Зарегистрироваться'
        modal={props.openModal}
        onSubmit={handleSubmit}
        disabled={!inputValues.isFormValid}
      >
        <p className='popup-input__title'>Email</p>
        <div className='popup__input-container'>
          <input
            value={inputValues.email.value}
            type='email'
            name='email'
            className='popup__input popup__input-email'
            id='popup__input-signin-profile-email'
            required
            placeholder='Введите почту'
            autoFocus
            onChange={handleInputChange}
          />
          <p className='popup__input_type_error'>{inputValues.email.validationMessage}</p>
        </div>
        <p className='popup-input__title'>Пароль</p>
        <div className='popup__input-container'>
          <input
            value={inputValues.password.value}
            type='password'
            name='password'
            className='popup__input popup__input-password'
            id='popup__input-signin-password'
            required
            minLength='6'
            maxLength='30'
            placeholder='Введите пароль'
            onChange={handleInputChange}
          />
          <p className='popup__input_type_error'>{inputValues.password.validationMessage}</p>
        </div>
      </PopupWithForm>
    </>
  );
};
export default SigninPopup;
