import React, { useState } from 'react';
import PopupWithForm from '../popupwithform/PopupWithForm';

const SignFormPopup = (props) => {
  const [input, setInput] = useState({ email: '', password: '', name: '' });

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      email: input.email,
      password: input.password,
      name: input.name,
    });
  };
  return (
    <>
      <PopupWithForm
        name='profile'
        title='Регистрация'
        isOpen={props.isOpen}
        onClose={props.onClose}
        button='Зарегистрироваться'
        underButton='Войти'
        modal={props.openModal}
        onSubmit={handleSubmit}
      >
        <p className='popup-input__title'>Email</p>
        <input
          value={input.email}
          type='email'
          name='email'
          className='popup__input popup__input-profile-email'
          id='popup__input-profile-email'
          required
          minLength='2'
          maxLength='30'
          placeholder='Введите почту'
          autoFocus
          onChange={handleInputChange}
        />
        <span className='popup__input_type_error' id='popup__input-profile-email-error' />
        <p className='popup-input__title'>Пароль</p>
        <input
          value={input.password}
          type='password'
          name='password'
          className='popup__input popup__input-password'
          id='popup__input-password'
          required
          minLength='2'
          maxLength='30'
          placeholder='Введите пароль'
          onChange={handleInputChange}
        />
        <span className='popup__input_type_error' id='popup__input-error' />
        <p className='popup-input__title'>Имя</p>
        <input
          value={input.name}
          type='text'
          name='name'
          className='popup__input popup__input-name'
          id='popup__input-name'
          required
          minLength='2'
          pattern='^[A-Za-zА-Яа-яЁё\s -]+$'
          maxLength='30'
          placeholder='Введите своё имя'
          onChange={handleInputChange}
        />
        <span className='popup__input_type_error' id='popup__input-error' />
      </PopupWithForm>
    </>
  );
};
export default SignFormPopup;
