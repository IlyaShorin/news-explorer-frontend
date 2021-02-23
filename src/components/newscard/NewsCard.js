import React, { useState, useEffect } from 'react';
import './NewsCard.css';

const NewsCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  function handleHover() {
    setIsHovered(!isHovered);
  }

  
  const [saved, setSaved] = useState(false);
  useEffect(() => {
    if (props.saved) {
      setSaved(saved);
    }
  }, []);

  function handleSave() {
    if (props.authtorized) {
      if (saved) {
        props.onDeleteNews(props.news);
        setSaved(false);
      } else {
        props.onSave(props.news);
        setSaved(true);
      }
    }
  }

  const date = new Date(props.saved ? props.news.date : props.news.publishedAt);
  const formattedDate = date
    .toLocaleDateString('ru-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
    .split(' ');
  function tooltipHandler() {
    if (props.saved) {
      return 'Удалить из сохраненных';
    } else {
      if (!props.authtorized) {
        return 'Войдите чтобы сохранить';
      } else {
        return 'Сохранить';
      }
    }
  }

  return (
    <li className='news__item'>
      <img
        className='news__image'
        src={props.saved ? props.news.image : props.news.urlToImage}
        alt='иллюстрация к новости'
      />
      <div>
        <div className='news__caption'>
          <p className={isHovered ? 'item__tooltip item__tooltip_visible' : 'item__tooltip'}>{tooltipHandler()}</p>
          <button
            type='button'
            className={props.saved ? 'news__delete-button' : 'news__save-button'}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            onClick={() => (props.authtorized ? handleSave : null)}
          ></button>
          {props.saved ? <p className='news__theme-text'>{props.news.keyword}</p> : ''}
        </div>
        <a className='news__link' href={props.saved ? props.news.link : props.news.url}>
          <time className='news__date'>{formattedDate[0] + ' ' + formattedDate[1] + ', ' + formattedDate[2]}</time>
          <h3 className='news__title'>{props.news.title}</h3>
          <p className='news__text'>{props.saved ? props.news.text : props.news.description}</p>
          <p className='news__media'>{props.saved ? props.news.source : props.news.source.name}</p>
        </a>
      </div>
    </li>
  );
};

export default NewsCard;
