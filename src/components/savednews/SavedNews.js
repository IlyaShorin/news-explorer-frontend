import React from "react";
import NewsCardList from "../newscardlist/NewsCardList";
import SavedNewsHeader from "../savednewsheader/SavedNewsHeader";
import "./SavedNews.css";

const SavedNews = (props) => {
  return (
    <div className="saved-news">
      <SavedNewsHeader userName={props.userName} />
      <div className="news">
        <NewsCardList
          news={props.news}
          saved={true}
          onDeleteNews={props.onDeleteNews}
          authtorized={props.authtorized}
        />
      </div>
    </div>
  );
};
export default SavedNews;
