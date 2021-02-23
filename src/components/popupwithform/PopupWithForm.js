import React, { useRef } from 'react';
import useClosePopup from '../../hooks/closePopup';

import './PopupWithForm.css';

const PopupWithForm = (props) => {
  function openNewModal() {
    props.onClose();
    props.modal();
  }
  const ref = useRef();
  useClosePopup(ref, () => {
    if (props.isOpen) {
      props.onClose();
    }
  });

  return (
    <section className={`popup popup_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className={'popup__container'}>
        <button
          type='button'
          className={`popup__button-close popup__button-close_${props.name}`}
          onClick={props.onClose}
        ></button>
        <form onSubmit={props.onSubmit} name='popup_form' className={`form form-${props.name}`} ref={ref}>
          <h2 className={'popup__heading'}>{props.title}</h2>
          {props.children}
          {props.tooltip ? (
            <button onClick={openNewModal} className='popup-link'>
              <p>Войти</p>
            </button>
          ) : (
            <>
              <button
                type='submit'
                className={`popup__button-save popup__button-save-${props.name}`}
                disabled={props.disabled}
              >
                {props.button}
              </button>
              <div className='popup-link__container'>
                <p className='popup-link__text'>или </p>
                <button type='button' className='popup-link' onClick={openNewModal}>
                  {props.underButton}
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </section>
  );
};
export default PopupWithForm;
