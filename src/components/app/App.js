import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Main from "../main/Main";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import SigninPopup from "../signinpopup/SigninPopup";
import SignupPopup from "../signuppopup/SignupPopup";
import SavedNews from "../savednews/SavedNews";
import newsApi from "../../utils/NewsApi";
import api from "../../utils/MainApi";
import { Switch, Route } from "react-router-dom";
import TooltipPopup from "../tooltippopup/TooltipPopup";
import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [searchTheme, setSearchTheme] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSigninPopupOpened, setIsSigninPopupOpened] = useState(false);
  const [isSignupPopupOpened, setIsSignupPopupOpened] = useState(false);
  const [isTooltipOpened, setIsTooltipOpened] = useState(false);
  const [news, setNews] = useState([]);
  const [showNews, setShowNews] = useState(false);
  const [savedNews, setSavedNews] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    handleTokenCheck();
  }, [isLoggedIn]);

  function handleTokenCheck() {
    if (localStorage.getItem("jwt")) {
      const jwt = localStorage.getItem("jwt");
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
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

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
    localStorage.removeItem("jwt");
    setUserName("");
  }
  function handleSearchNewsSubmit(theme) {
    setSearchTheme(theme);

    newsApi
      .findNews(theme)
      .then((data) => {
        data.articles.forEach((el) => {
          el.theme = theme;
          el.saved = false;
        });
        setNews(data.articles.slice(1, 4));
        console.log(news);
      })
      .then((data) => {
        setShowNews(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function showMore() {
    newsApi.findNews(searchTheme).then((data) => {
      let newsCount = news.length < 99 ? news.length + 4 : news.length + 1;

      setNews(data.articles.slice(1, newsCount));
    });
  }
  function saveNews(newsForSave) {
    api.saveNews(newsForSave).then((res) => {
      setSavedNews({ ...savedNews, res });
    });
  }
  function deleteFromSavedNews(newsForDelete) {
    savedNews.forEach((savedNews) => {
      if (savedNews.link === newsForDelete.link) {
        api.deleteArticle(savedNews._id).then((res) => {});
      }
    });
  }

  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path="/">
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
            />
          </Route>
          <Route path="/saved-news">
            <Header
              themeDark={true}
              isLoggedIn={isLoggedIn}
              onLogout={handleLogout}
              userName={userName}
            />
            <SavedNews
              news={savedNews}
              userName={userName}
              onDeleteNews={deleteFromSavedNews}
              authtorized={isLoggedIn}
            />
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
        <TooltipPopup
          isOpen={isTooltipOpened}
          onClose={closePopup}
          openModal={handleSigninPopupOpen}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
