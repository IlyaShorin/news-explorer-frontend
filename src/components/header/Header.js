import React from "react";
import "./Header.css";

const Header = (props) => {
  let theme = props.themeDark ? "_theme_dark" : "_theme_light";
  return (
    <header className={`header header${theme}`}>
      <div className="header__container">
        <div className="title__container">
          <div className={`header__title header__title${theme}`}>
            NewsExplorer
          </div>
        </div>
        <div>
          <button className={`button__main button__main${theme}`}>
            <a href="/" className={`header__link header__link${theme}`}>
              Главная
            </a>
          </button>
          <button className="button__signin" onClick={props.onAuthtorizeForm}>
            Авторизоваться
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
