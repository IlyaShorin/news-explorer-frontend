import React, { useState, useRef, useEffect } from 'react';
import PopupWithForm from '../popupwithform/PopupWithForm';
import './SigninPopup.css';

const SigninPopup = (props) => {
  const [input, setInput] = useState({ email: '', password: '' });

  const firstRender = useRef(true);
  const [isDisabled, setIsDisabled] = useState(true);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    setIsDisabled(formValidation());
  }, [input.email, input.password]);

  const formValidation = () => {
    if (input.email === '') {
      setEmailError('Введите email');
    } else if (!/\S+@\S+\.\S+/.test(input.email)) {
      setEmailError('Введите корректный email');
    } else if (/\S+@\S+\.\S+/.test(input.email)) {
      setEmailError(null);
    } else if (input.password === '') {
      setPasswordError('Введите пароль');
    } else if (input.password.length <= 6) {
      setPasswordError('Пароль должен быть больше 6 символов');
    } else if (input.password.length >= 6) {
      setPasswordError(null);
    } else {
      return false;
    }
    return true;
  };
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
        disabled={isDisabled}
      >
        <p className='popup-input__title'>Email</p>
        <div className='popup__input-container'>
          <input
            value={input.name}
            type='email'
            name='email'
            className='popup__input popup__input-email'
            id='popup__input-signin-profile-email'
            required
            placeholder='Введите почту'
            autoFocus
            onChange={handleInputChange}
          />
          {emailError && <p className='popup__input_type_error'>{emailError}</p>}
        </div>
        <p className='popup-input__title'>Пароль</p>
        <div className='popup__input-container'>
          <input
            value={input.about}
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
          {passwordError && <p className='popup__input_type_error'>{passwordError}</p>}
        </div>
      </PopupWithForm>
    </>
  );
};
export default SigninPopup;
