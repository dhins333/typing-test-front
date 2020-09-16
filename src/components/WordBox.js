import React from 'react';

const WordBox = ({words,position}) => {
    

    return(
        <div className = 'word-box'>{words.map((word,index) => {
            return <p className = {index === position ? 'active-p inline-p':'inline-p'}>{word} </p>
        })}</div>
    )
}

export default WordBox;