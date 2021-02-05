import React from 'react';
import './Header.css';

const Header = (props) => {
  return (
    <header className='header'>
      <div className='header__container'>
        <div className='title__container'>
          <div className='header__title'>NewsExplorer</div>
        </div>
        <div>
          <button className='button__main'>
            <a href='/' className='header__link'>
              Главная
            </a>
          </button>
          <button className='button__signin' onClick={props.onAuthtorizeForm}>
            Авторизоваться
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
