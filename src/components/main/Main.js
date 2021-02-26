import React from 'react';
import About from '../about/About';
import NewsCardList from '../newscardlist/NewsCardList';
import SearchForm from '../searchform/SearchForm';
import Preloader from '../preloader/Preloader';

import './Main.css';

const Main = (props) => {
  return (
    <>
      <SearchForm onSubmit={props.onSearchNews} />
      {props.isLoading ? (
        <Preloader />
      ) : (
        <main className={props.showNews ? `main main_visible` : `main`}>
          <div className='main__container'>
            <div className='main__title-container'>
              <p className='main__title'>Результаты поиска</p>
            </div>
            <NewsCardList
              news={props.news}
              onSave={props.onSaveNews}
              authtorized={props.authtorized}
              onDeleteNews={props.onDeleteNews}
            />
          </div>
          {props.news.length === 99 ? (
            ''
          ) : (
            <div className='main__button-container'>
              <button className='main__button' onClick={props.onShowMore}>
                Показать еще
              </button>
            </div>
          )}
        </main>
      )}
      <About />
    </>
  );
};
export default Main;
