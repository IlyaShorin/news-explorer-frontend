import React, { useState, useEffect } from 'react';
import './NewsCard.css';

const NewsCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  function handleHover() {
    setIsHovered(!isHovered);
  }
  function handleSave() {
    if (props.authtorized) {
      if (props.news.saved) {
        props.onDeleteNews(props.news);
      } else if (props.saved) {
        props.onDeleteNews(props.news);
      } else {
        props.onSave(props.news);
      }
    }
  }

  const date = new Date(props.news.date ? props.news.date : props.news.publishedAt);
  const formattedDate = date
    .toLocaleDateString('ru-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
    .split(' ');
  function tooltipHandler() {
    if (props.news.saved) {
      return 'Удалить из сохраненных';
    } else if (props.saved) {
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
        src={props.news.image ? props.news.image : props.news.urlToImage}
        alt='иллюстрация к новости'
      />
      <div>
        <div className='news__caption'>
          <p className={isHovered ? 'item__tooltip item__tooltip_visible' : 'item__tooltip'}>{tooltipHandler()}</p>
          <button
            type='button'
            className={
              props.saved
                ? 'news__delete-button'
                : props.news.saved
                ? 'news__save-button news__save-button_saved'
                : 'news__save-button'
            }
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            onClick={() => (props.authtorized ? handleSave() : null)}
          ></button>
          {props.saved ? (
            props.news.keyword ? (
              <p className='news__theme-text'>{props.news.keyword}</p>
            ) : (
              <p className='news__theme-text'>{props.news.theme}</p>
            )
          ) : (
            ''
          )}
        </div>
        <a className='news__link' href={props.news.link ? props.news.link : props.news.url}>
          <time className='news__date'>{formattedDate[0] + ' ' + formattedDate[1] + ', ' + formattedDate[2]}</time>
          <h3 className='news__title'>{props.news.title}</h3>
          <p className='news__text'>{props.news.text ? props.news.text : props.news.description}</p>
          <p className='news__media'>{props.news.source.name ? props.news.source.name : props.news.source}</p>
        </a>
      </div>
    </li>
  );
};

export default NewsCard;
