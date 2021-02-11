import React from 'react';
import Navigation from '../navigation/Navigation';
import './Header.css';

const Header = (props) => {
  let theme = props.themeDark ? '_theme_dark' : '_theme_light';

  return (
    <header className={`header header${theme}`}>
      <div className='header__container'>
        <a href='/' className={`header__title header__title${theme}`}>
          NewsExplorer
        </a>
        <Navigation
          themeDark={props.themeDark}
          isLoggedIn={props.isLoggedIn}
          onLogout={props.onLogout}
          onAuthtorizeForm={props.onAuthtorizeForm}
        />
      </div>
    </header>
  );
};
export default Header;
