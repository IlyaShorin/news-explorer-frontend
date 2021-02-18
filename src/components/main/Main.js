import React, { useState } from 'react';
import About from '../about/About';
import NewsCardList from '../newscardlist/NewsCardList';
import SearchForm from '../searchform/SearchForm';

import './Main.css';

const Main = (props) => {
  return (
    <>
      <SearchForm onSubmit={props.onSearchNews} />
      <main className={props.showNews ? `main main_visible` : `main`}>
        <div className='main__container'>
          <div className='main__title-container'>
            <p className='main__title'>Результаты поиска</p>
          </div>
          <NewsCardList news={props.news} />
        </div>
        <div className='main__button-container'>
          <button className='main__button'>Показать еще</button>
        </div>
      </main>
      <About />
    </>
  );
};
export default Main;
