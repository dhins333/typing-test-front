import React from 'react';
import { useSelector } from 'react-redux';

const Accuracy = () => {

    const accuracy = useSelector((state) => {
        return state.accuracy;
    })

    return(
        <div className='accuracy'>
            <p className='accuracy-text'>Accuracy%</p>
            <h3 className='accuracy-value'>{accuracy}</h3>
        </div>
    )
}

export default Accuracy;