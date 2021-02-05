import React, { useState } from 'react';
import PopupWithForm from '../popupwithform/PopupWithForm';
import './SigninPopup.css';
import { Link } from 'react-router-dom';

const SigninPopup = (props) => {
  const [input, setInput] = useState({ email: '', password: '' });

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({ email: input.email, password: input.password });
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
      >
        <p className='popup-input__title'>Email</p>
        <input
          value={input.name}
          type='text'
          name='email'
          className='popup__input popup__input-profile-name'
          id='popup__input-profile-name'
          required
          minLength='2'
          maxLength='30'
          placeholder='Введите почту'
          autoFocus
          onChange={handleInputChange}
        />
        <span className='popup__input_type_error' id='popup__input-profile-name-error' />
        <p className='popup-input__title'>Пароль</p>
        <input
          value={input.about}
          type='password'
          name='password'
          className='popup__input popup__input-title'
          id='popup__input-title'
          required
          minLength='2'
          maxLength='30'
          placeholder='Введите пароль'
          onChange={handleInputChange}
        />
        <span className='popup__input_type_error' id='popup__input-title-error' />
      </PopupWithForm>
    </>
  );
};
export default SigninPopup;
