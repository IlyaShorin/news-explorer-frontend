import React from 'react'
import NewsCard from '../newscard/NewsCard';
import './NewsCardList.css'

const NewsCardList = (props)=>{
    return(
        <ul className='news-card-list'>
          <NewsCard
            cardTheme = {props.onCardTheme}
            onCardSave={props.onCarSave}
            onCardDelete={props.onCardDelete}
          />
        </ul>
    )
}

export default NewsCardList