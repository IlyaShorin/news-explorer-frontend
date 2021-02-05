import React from 'react';
import pepe from '../../images/пепе.png';
import './About.css';

const About = (props) => {
  return (
    <div className='about'>
      <img className='about__img' src={pepe} alt='Это я' />
      <div className='about__container'>
        <h2 className='about__header'>Об авторе</h2>
        <div className='about__text-container'>
          <p className='about__text'>
            Это блок с описанием автора проекта. Здесь следует указать, как вас зовут, чем вы занимаетесь, какими
            технологиями разработки владеете
          </p>
          <p className='about__text'>
            Также можно рассказать о процессе обучения в Практикуме, чему вы тут научились, и чем можете помочь
            потенциальным заказчикам.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
