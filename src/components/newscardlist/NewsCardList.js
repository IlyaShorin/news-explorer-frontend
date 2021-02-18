import React from 'react';
import NewsCard from '../newscard/NewsCard';
import './NewsCardList.css';

const NewsCardList = (props) => {
  return (
    <div className='news__container'>
      <ul className='news-card-list'>
        {props.news.map((news, i) => {
          <NewsCard key={i} news={news} />;
        })}
      </ul>
    </div>
  );
};

export default NewsCardList;
