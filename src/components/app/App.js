import React, { useEffect, useState } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import About from '../about/About';
import SearchForm from '../searchform/SearchForm';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import SigninPopup from '../signinpopup/SigninPopup';
import SignupPopup from '../signuppopup/SignupPopup';
import ProtectedRoute from '../../hoc/ProtecdetRoute'
import SavedNewsHeader from '../savednewsheader/SavedNewsHeader';
import auth from '../../utils/auth';
import { Switch, Route, useHistory } from 'react-router-dom';
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSigninPopupOpened, setIsSigninPopupOpened] = useState(false);
  const [isSignupPopupOpened, setIsSignupPopupOpened] = useState(false);
  const [isAuthSuccess, setIsAuthSuccess] = useState(false);
  let history = useHistory();
  function handleSigninPopupOpen() {
    setIsSigninPopupOpened(!isSigninPopupOpened);
  }
  function handleSignupPopupOpen() {
    setIsSignupPopupOpened(!isSignupPopupOpened);
  }
  function closePopup() {
    setIsSigninPopupOpened(false);
    setIsSignupPopupOpened(false);
  }
  function handleSubmitRegister(obj) {
    auth.newRegister(obj).then((data) => {
      if (data) {
        setIsAuthSuccess(true);
      } else {
        setIsAuthSuccess(false);
      }
    });
  }
  function handleSubmitLogin(obj) {
    auth
      .newLogin(obj)
      .then((data) => {
        if (data.token) {
          setIsAuthSuccess(true);
          setIsLoggedIn(true);
        }
      })
      .catch((err) => {
        setIsAuthSuccess(false);
      });
  }
  return (
    <div className='app'>
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route path='/'>
        <Header onAuthtorizeForm={handleSigninPopupOpen} />
        <SearchForm />
        <About></About>
        </Route>
        
        
        <Route path='saved-news'>
          <Header/>
          <SavedNewsHeader/>
        </Route>
        </Switch>
        <Footer />
        <SigninPopup
          isOpen={isSigninPopupOpened}
          onClose={closePopup}
          openModal={handleSignupPopupOpen}
          onSubmit={handleSubmitLogin}
        />
        <SignupPopup
          isOpen={isSignupPopupOpened}
          onClose={closePopup}
          openModal={handleSigninPopupOpen}
          onSubmit={handleSubmitRegister}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
