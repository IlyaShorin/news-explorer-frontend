import React, { useState } from 'react';
import About from '../about/About';
import NewsCardList from '../newscardlist/NewsCardList';
import SearchForm from '../searchform/SearchForm';

import './Main.css';

const Main = (props) => {
  const [isNewsListShowed, setIsNewsListShowed] = useState(false);
  const handleShow = (e) => {
    e.preventDefault();
    setIsNewsListShowed(!isNewsListShowed);
  };
  return (
    <>
      <SearchForm onSubmit={handleShow} newsList={isNewsListShowed} />
      <main className={isNewsListShowed ? `main main_visible` : `main`}>
        <div className='main__container'>
          <div className='main__title-container'>
            <p className='main__title'>Результаты поиска</p>
          </div>
          <NewsCardList />
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
