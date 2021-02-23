import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import logoutImgBlack from '../../images/logout_black.svg';
import logoutImgWhite from '../../images/logout_white.svg';

const Navigation = (props) => {
  let theme = props.themeDark ? '_theme_dark' : '_theme_light';

  return (
    <nav
      className={!props.burger ? `navigation navigation${theme}` : `navigation navigation${theme} navigation__burgered`}
    >
      <ul className={`navigation__list`}>
        <li className={`navigation__item`}>
          <NavLink
            to='/'
            className={
              !props.burger
                ? `navigation__link navigation__link${theme}`
                : `navigation__link navigation__link${theme} navigation__link_burgered`
            }
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
              onClick={props.onRoute}
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
          {props.userName}
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
