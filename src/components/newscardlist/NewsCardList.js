import React from "react";
import NewsCard from "../newscard/NewsCard";
import "./NewsCardList.css";

const NewsCardList = (props) => {
  return (
    <div className="news__container">
      <ul className="news-card-list">
        <NewsCard
          cardTheme={props.onCardTheme}
          onCardSave={props.onCarSave}
          onCardDelete={props.onCardDelete}
        />
        <NewsCard
          cardTheme={props.onCardTheme}
          onCardSave={props.onCarSave}
          onCardDelete={props.onCardDelete}
        />
        <NewsCard
          cardTheme={props.onCardTheme}
          onCardSave={props.onCarSave}
          onCardDelete={props.onCardDelete}
        />
        <NewsCard
          cardTheme={props.onCardTheme}
          onCardSave={props.onCarSave}
          onCardDelete={props.onCardDelete}
        />
      </ul>
    </div>
  );
};

export default NewsCardList;
