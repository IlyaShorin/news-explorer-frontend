import React from 'react'
import NewsCardList from '../newscardlist/NewsCardList'
import SavedNewsHeader from '../savednewsheader/SavedNewsHeader'
import './SavedNews.css'

const SavedNews =(props)=>{
    return(
        <div className='saved-news'>
        <SavedNewsHeader/>
        <NewsCardList/>
        </div>
    )
}
export default SavedNews