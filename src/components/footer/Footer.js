import React from 'react';
import GitHub__logo from '../../images/github.svg';
import FB__logo from '../../images/fb.svg';
import './Footer.css';

const Footer = (props) => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <p className='footer__copyright'>&copy; 2020 Supersite, Powered by News API</p>
        <div className='footer__lists'>
          <ul className='footer__links'>
            <li className='links__main'>
              <a href='/'>Главная</a>
            </li>
            <li className='links__praktikum'>
              <a href='https://praktikum.yandex.ru/'>Яндекс.Практикум</a>
            </li>
          </ul>
          <ul className='footer__social'>
            <li className='social__git'>
              <a href='https://github.com/'>
                <img src={GitHub__logo} alt='GitHub' />
              </a>
            </li>
            <li className='social__fb'>
              <a href='https://www.facebook.com/ilya.shorin.1'>
                <img src={FB__logo} alt='facebook' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
