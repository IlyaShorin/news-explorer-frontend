import React, { useState } from 'react';
import Navigation from '../navigation/Navigation';
import Burger from '../burger/Burger';
import './Header.css';

const Header = (props) => {
  let theme = props.themeDark ? '_theme_dark' : '_theme_light';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function menuHandler() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className={!isMenuOpen ? `header header${theme}` : 'header header_relative'}>
      <div className={isMenuOpen ? 'header__container header__burger-container' : 'header__container'}>
        <a
          href='/'
          className={
            !isMenuOpen
              ? `header__title header__title${theme}`
              : `header__title header__title_theme_light header__title_burgered`
          }
        >
          NewsExplorer
        </a>
        <Navigation {...props} />
        <Burger
          onClick={menuHandler}
          opened={isMenuOpen}
          isLoggedIn={props.isLoggedIn}
          onLogout={props.onLogout}
          onAuthtorizeForm={props.onAuthtorizeForm}
          themeDark={props.themeDark}
        />
      </div>
    </header>
  );
};
export default Header;
