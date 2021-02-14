import React from 'react';
import blackBurger from '../../images/burger_black.svg';
import lightBurger from '../../images/burger_light.svg';
import cross from '../../images/cross.svg';
import Navigation from '../navigation/Navigation';

import './Burger.css';

const Burger = (props) => {
  return (
    <>
      {props.opened ? (
        <>
          <Navigation
            burger={true}
            isLoggedIn={props.isLoggedIn}
            onLogout={props.onLogout}
            onAuthtorizeForm={props.onAuthtorizeForm}
          />

          <button onClick={props.onClick} className='burger__button burger__button-cross'>
            <img src={cross} alt='закрыть'></img>
          </button>
        </>
      ) : (
        <button className='burger__button' onClick={props.onClick}>
          <img src={props.themeDark ? blackBurger : lightBurger} alt='бургер'></img>
        </button>
      )}
    </>
  );
};
export default Burger;
