import React from 'react'

const SavedNewsHeader = (props)=>{
    return(
        <div>
            <p>Сохраненные статьи</p>
            <p>{props.name}, у вас {props.count} сохраненных статей</p>
            <p>По ключевым словам :</p>
        </div>
    )
}
export default SavedNewsHeader