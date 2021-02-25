import React from "react";
import NewsCard from "../newscard/NewsCard";
import "./NewsCardList.css";

const NewsCardList = (props) => {
  console.log(props.news);
  return (
    <div className="news__container">
      <ul className="news-card-list">
        {props.news
          ? props.news.map((news, i) => (
              <NewsCard {...props} key={i} news={news} />
            ))
          : ""}
      </ul>
    </div>
  );
};

export default NewsCardList;
