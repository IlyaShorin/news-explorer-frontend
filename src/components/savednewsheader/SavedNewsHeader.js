import React from 'react'
import './SavedNewsHeader.css'

const SavedNewsHeader = (props)=>{
    return(
        <div className='saved-news__header-container'>
            <h1 className='saved-news__header-title'>Сохраненные статьи</h1>
            <p className='saved-news__news-count'>{props.name}, у вас {props.count} сохраненных статей</p>
            <p className='saved-news__key-words'>По ключевым словам:</p>
        </div>
    )
}
export default SavedNewsHeader