import React from 'react';
import { useSelector } from 'react-redux';

const WPM = () => {

    const wpm = useSelector((state) => {
        return state.wpm
    })

    return(
        <div className='wpm'>
            <p className='wpm-text'>Words Per Minute</p>
            <h3 className='wpm-value'>{wpm}</h3>
        </div>
    )
}

export default WPM;