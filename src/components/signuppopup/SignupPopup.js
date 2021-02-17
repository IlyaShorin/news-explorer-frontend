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
        <div className='popup__input-container'>
          <input
            value={input.email}
            type='email'
            name='email'
            className='popup__input popup__input-email'
            id='popup__input-signup-profile-email'
            required
            minLength='2'
            maxLength='30'
            placeholder='Введите почту'
            autoFocus
            onChange={handleInputChange}
          />
        </div>
        <p className='popup-input__title'>Пароль</p>
        <div className='popup__input-container'>
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
        </div>
        <p className='popup-input__title'>Имя</p>
        <div className='popup__input-container'>
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
        </div>
      </PopupWithForm>
    </>
  );
};
export default SignFormPopup;
