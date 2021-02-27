import React, { useState, useEffect } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Main from '../main/Main';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import SigninPopup from '../signinpopup/SigninPopup';
import SignupPopup from '../signuppopup/SignupPopup';
import SavedNews from '../savednews/SavedNews';
import newsApi from '../../utils/NewsApi';
import api from '../../utils/MainApi';
import { Switch, Route } from 'react-router-dom';
import TooltipPopup from '../tooltippopup/TooltipPopup';
import ProtectedRoute from '../../hoc/ProtecdetRoute';
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [searchTheme, setSearchTheme] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSigninPopupOpened, setIsSigninPopupOpened] = useState(false);
  const [isSignupPopupOpened, setIsSignupPopupOpened] = useState(false);
  const [isTooltipOpened, setIsTooltipOpened] = useState(false);
  const [news, setNews] = useState([]);
  const [showNews, setShowNews] = useState(false);
  const [savedNews, setSavedNews] = useState([]);
  const [userName, setUserName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    handleTokenCheck();
  }, [isLoggedIn]);

  function handleTokenCheck() {
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt');
      api
        .userName(jwt)
        .then((res) => {
          setUserName(res.name);
          setIsLoggedIn(true);
          setCurrentUser(res);
        })
        .catch((err) => {
          console.log(err);
        });
      api
        .getSavedNews()
        .then((res) => {
          setSavedNews(res);
          savedNews.forEach((el) => {
            el.saved = true;
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  useEffect(() => {
    if (localStorage.showedNews) {
      setNews(JSON.parse(localStorage.getItem('showedNews')));
      setSearchTheme(JSON.parse(localStorage.getItem('theme')));
      setShowNews(true);
    }

    if (localStorage.savedNews) {
      setSavedNews(JSON.parse(localStorage.getItem('savedNews')));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('showedNews', JSON.stringify(news));
    localStorage.setItem('theme', JSON.stringify(searchTheme));
  }, [news, searchTheme]);

  useEffect(() => {
    localStorage.setItem('savedNews', JSON.stringify(savedNews));
  }, [savedNews]);

  function handleSigninPopupOpen() {
    setIsSigninPopupOpened(!isSigninPopupOpened);
  }
  function handleSignupPopupOpen() {
    setIsSignupPopupOpened(!isSignupPopupOpened);
  }
  function handleTooltipPopupOpen() {
    closePopup();
    setIsTooltipOpened(true);
  }
  function closePopup() {
    setIsSigninPopupOpened(false);
    setIsSignupPopupOpened(false);
    setIsTooltipOpened(false);
  }
  function handleSubmitRegister(obj) {
    api
      .newRegister(obj)
      .then((data) => {
        handleTooltipPopupOpen();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function handleSubmitLogin(obj) {
    api
      .newLogin(obj)
      .then((data) => {
        if (data.token) {
          setIsLoggedIn(true);
          closePopup();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function handleLogout() {
    setIsLoggedIn(false);
    localStorage.removeItem('jwt');
    setUserName('');
  }
  function handleSearchNewsSubmit(theme) {
    setSearchTheme(theme);
    setIsLoading(true);
    return newsApi
      .findNews(theme)
      .then((data) => {
        data.articles.forEach((el) => {
          el.theme = theme;
          savedNews.forEach((savednews) => {
            if (savednews.link === el.url) {
              el.saved = true;
              el._id = savednews._id;
            }
          });
        });
        setNews(data.articles.slice(1, 4));
      })
      .finally(() => {
        setIsLoading(false);
        setShowNews(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function showMore() {
    return newsApi.findNews(searchTheme).then((data) => {
      let newsCount = news.length < 99 ? news.length + 4 : news.length + 1;
      data.articles.forEach((el) => {
        el.theme = searchTheme;
        savedNews.forEach((savednews) => {
          if (savednews.link === el.url) {
            el.saved = true;
            el._id = savednews._id;
          }
        });
      });
      setNews(data.articles.slice(1, newsCount));
    });
  }
  function saveNews({ theme, title, description, publishedAt, source, url, urlToImage }) {
    api.saveNews({ theme, title, description, publishedAt, source, url, urlToImage }).then((res) => {
      news.forEach((el) => {
        if (el.url === res.link) {
          el.saved = true;
          el._id = res._id;
        }
      });
      setSavedNews([
        ...savedNews,
        { theme, title, description, publishedAt, source, url, urlToImage, _id: res._id, saved: true },
      ]);
    });
  }
  function deleteFromSavedNews(newsForDelete) {
    api.deleteArticle(newsForDelete._id).then((res) => {
      setSavedNews(savedNews.filter((news) => news._id !== newsForDelete._id));
      news.forEach((el) => {
        if (newsForDelete._id === el._id) {
          el.saved = false;
        }
      });
    });
  }

  return (
    <div className='app'>
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path='/'>
            <Header
              onAuthtorizeForm={handleSigninPopupOpen}
              themeDark={false}
              isLoggedIn={isLoggedIn}
              onLogout={handleLogout}
              userName={userName}
            />
            <Main
              onSearchNews={handleSearchNewsSubmit}
              showNews={showNews}
              news={news}
              onShowMore={showMore}
              onSaveNews={saveNews}
              authtorized={isLoggedIn}
              onDeleteNews={deleteFromSavedNews}
              savedNews={savedNews}
              isLoading={isLoading}
              openModal={handleSigninPopupOpen}
            />
          </Route>
          <ProtectedRoute path='/saved-news' isloggedIn={isLoggedIn}>
            <Header themeDark={true} isLoggedIn={isLoggedIn} onLogout={handleLogout} userName={userName} />
            <SavedNews
              news={savedNews}
              userName={userName}
              onDeleteNews={deleteFromSavedNews}
              authtorized={isLoggedIn}
            />
          </ProtectedRoute>
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
        <TooltipPopup isOpen={isTooltipOpened} onClose={closePopup} openModal={handleSigninPopupOpen} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
