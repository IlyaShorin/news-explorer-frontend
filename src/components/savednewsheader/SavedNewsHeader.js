import React from 'react';
import './SavedNewsHeader.css';

const SavedNewsHeader = (props) => {
  const array = props.news;
  const getCountIds = (target) => {
    const result = {};
    target.forEach((item) => {
      if (item.keyword) {
        result[item.keyword] ? result[item.keyword]++ : (result[item.keyword] = 1);
      } else if (item.theme) {
        result[item.theme] ? result[item.theme]++ : (result[item.theme] = 1);
      }
    });

    return Object.keys(result).map((item) => {
      return {
        theme: item,
        sum: result[item],
      };
    });
  };
  const sortedArray = getCountIds(array);
  const sortByCount = (array) => {
    return array.sort((a, b) => (a.sum < b.sum ? 1 : -1));
  };
  const finalArray = sortByCount(sortedArray);
  function string() {
    let result;
    if (finalArray.length > 0) {
      switch (finalArray.length) {
        case 1:
          result = `${finalArray[0].theme}`;
          break;
        case 2:
          result = `${finalArray[0].theme} и ${finalArray[1].theme}`;
          break;
        case 3:
          result = `${finalArray[0].theme}, ${finalArray[1].theme} и ${finalArray[2].theme}`;
          break;

        default:
          result = `${finalArray[0].theme}, ${finalArray[1].theme} и ${finalArray.length - 2} другим`;
      }
    }
    return result;
  }

  return (
    <div className='saved-news__header-container'>
      <h1 className='saved-news__header-title'>Сохраненные статьи</h1>
      <p className='saved-news__news-count'>
        {props.userName}, у вас {props.news.length} сохраненных статей
      </p>
      <p className='saved-news__key-words'>
        По ключевым словам: <span className='key-words__span'>{string()}</span>
      </p>
    </div>
  );
};
export default SavedNewsHeader;
