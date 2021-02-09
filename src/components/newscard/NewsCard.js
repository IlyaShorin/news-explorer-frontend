import React from 'react'
import './NewsCard.css'

const NewsCard = (props)=>{
    return (
        <li className='news__item'>
          <img  className='news__image' />
          <div>
          <button
            type='button'
            className='news__delete-button'
          ></button>
          <div className='news__theme-container' >
              <p className="news__theme-text">Погода</p>
          </div>
          </div>
        <div className='news__caption'>
            <p className='news__date'>20202020</p>
            <p className='news__title'>Погода погода</p>
            <p className='news__text'> Вот такая погода</p>
            <p className='news__media'>АФИША</p>
        </div>
        </li>
      );
}


export default NewsCard