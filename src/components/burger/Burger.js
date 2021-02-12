import React, { useState } from 'react';
import blackBurger from '../../images/burger_black.svg';
import lightBurger from '../../images/burger_light.svg';
import cross from '../../images/cross.svg';
import Navigation from '../navigation/Navigation';
import './Burger.css';

const Burger = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button className='burger__button' onClick={handleClick}>
        <img src={props.themeDark ? blackBurger : lightBurger} alt='бургер'></img>
      </button>
      {props.children}
    </div>
  );
};
export default Burger;
