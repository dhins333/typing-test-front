import React from 'react';
import { useSelector } from 'react-redux';

const TextBox = () => {

    const [words,position] = useSelector((state) => {
        return [state.words,state.position];
    })


    return(
        <div className='textbox'>
            <div className = 'text'>
                {words.slice(position).map((word,index) => {
                    return (<span key = {index} className = 'text-element'>{word} </span>)
                })}
            </div>
        </div>
    )
}

export default TextBox;