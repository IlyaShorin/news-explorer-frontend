import React from 'react';
import './SearchForm.css';

const SearchForm = (props) => {
  return (
    <div className='search-form'>
      <div className='search-form__title-container'>
        <h1 className='search-form__title'>Что творится в мире?</h1>
        <h2 className='search-form__subtitle'>
          Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.
        </h2>
      </div>
      <form className='search-form__form' onSubmit={props.onSubmit}>
        <input type='text' placeholder='Введите тему новости' className='search-form__input' required />
        <button className='search-form__button' type='submit'>
          Искать
        </button>
      </form>
    </div>
  );
};
export default SearchForm;
