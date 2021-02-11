import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import logoutImgBlack from '../../images/logout_black.svg';
import logoutImgWhite from '../../images/logout_white.svg';

const Navigation = (props) => {
  let theme = props.themeDark ? '_theme_dark' : '_theme_light';
  return (
    <nav className={`navigation navigation${theme}`}>
      <ul className={`navigation__list`}>
        <li className={`navigation__item`}>
          <NavLink
            to='/'
            className={`navigation__link navigation__link${theme}`}
            activeClassName={`navigation__link${theme}_active`}
            exact={true}
          >
            Главная
          </NavLink>
        </li>
        {props.isLoggedIn ? (
          <li className={`navigation__item`}>
            <NavLink
              to='/saved-news'
              className={`navigation__link navigation__link${theme}`}
              activeClassName={`navigation__link${theme}_active`}
            >
              Сохранённые статьи
            </NavLink>
          </li>
        ) : (
          ''
        )}
      </ul>
      {props.isLoggedIn ? (
        <button
          className={`navigation__button navigation__button${theme} navigation__button_logged-in`}
          onClick={props.onLogout}
        >
          Илья
          {props.themeDark ? (
            <img src={logoutImgBlack} className='logout-button' alt='Выйти'></img>
          ) : (
            <img src={logoutImgWhite} className='logout-button' alt='Выйти'></img>
          )}
        </button>
      ) : (
        <button className={`navigation__button navigation__button${theme}`} onClick={props.onAuthtorizeForm}>
          Авторизоваться
        </button>
      )}
    </nav>
  );
};
export default Navigation;
