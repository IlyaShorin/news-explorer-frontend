import React from "react";
import NewsCardList from "../newscardlist/NewsCardList";
import SavedNewsHeader from "../savednewsheader/SavedNewsHeader";
import "./SavedNews.css";

const SavedNews = (props) => {
  return (
    <div className="saved-news">
      <SavedNewsHeader />
      <div className="news">
        <NewsCardList />
      </div>
    </div>
  );
};
export default SavedNews;
