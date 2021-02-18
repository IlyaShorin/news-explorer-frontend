import React, { useState } from 'react';
import './NewsCard.css';
import img from '../../images/пепе.png';

const NewsCard = (props) => {
  console.log(props.news);
  const [isHovered, setIsHovered] = useState(false);
  function handleHover() {
    setIsHovered(!isHovered);
  }
  const date = new Date(props.news.publishedAt);
  const formattedDate = date
    .toLocaleDateString('ru-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
    .split(' ');

  return (
    <li className='news__item'>
      <img className='news__image' src={props.news.urlToImage} alt='иллюстрация к новости' />
      <div>
        <p className={isHovered ? 'item__tooltip item__tooltip_visible' : 'item__tooltip'}>
          {props.delete ? 'Убрать из сохраненных' : 'Сохранить'}
        </p>
        <button
          type='button'
          className={props.delete ? 'news__delete-button' : 'news__save-button'}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        ></button>
        <p className='news__theme-text'>Погода</p>
      </div>
      <div className='news__caption'>
        <a className='news__link' href='/'>
          <time className='news__date'>{formattedDate[0] + ' ' + formattedDate[1] + ', ' + formattedDate[2]}</time>
          <h3 className='news__title'>{props.news.newsTitle}</h3>
          <p className='news__text'>{props.news.description}</p>
          <p className='news__media'>{props.news.source.name}</p>
        </a>
      </div>
    </li>
  );
};

export default NewsCard;
