import React from 'react';
import { useSelector } from 'react-redux';

const Result = () => {

    const [wpm,average] = useSelector((state) => {
        return [state.wpm,state.accuracy]
    })

    return(
        <div className='result-overlay'>
            <div className='result'>
                <h2 className = 'result-h2'>You Typed ...</h2>
                <h3 className='result-h3'><span className = 'result-h3-span'>{wpm}</span> WPM</h3>
                <h2 className = 'result-h2'>At an average of</h2>
                <h3 className='result-h3'><span className = 'result-h3-span'>{average}</span> %</h3>
                <a className = 'retry' href='/'>Retry</a>
            </div>
        </div>
    )
}

export default Result;