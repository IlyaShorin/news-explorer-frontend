import React from 'react';
import './SavedNewsHeader.css';

const SavedNewsHeader = (props) => {
  function declOfNum(number, titles) {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]];
  }

  return (
    <div className='saved-news__header-container'>
      <h1 className='saved-news__header-title'>Сохраненные статьи</h1>
      <p className='saved-news__news-count'>
        {props.userName}, у вас
        {declOfNum(props.news.length, [' сохранена', ' сохранено', ' сохранены'])} {props.news.length} статей
      </p>
      <p className='saved-news__key-words'>
        По ключевым словам: <span className='key-words__span'>погода</span>
      </p>
    </div>
  );
};
export default SavedNewsHeader;
