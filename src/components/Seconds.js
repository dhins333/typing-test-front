import React from 'react';
import Countdown from 'react-countdown';
import { useSelector } from 'react-redux';

const Seconds = () => {

    const roundState = useSelector((state) => {
        return state.roundState
    });

    const secondValue = () => {
        if(roundState === 'started'){
            return(
                <Countdown date={Date.now() + 59000} renderer={props => <div>{props.seconds}</div>}/>
            )
        }
        else if(roundState === 'ended'){
            return 0;
        }
        else{
            return 60;
        }
    }

    
    return(
        <div className='seconds'>
            <p className='seconds-text'>Seconds</p>
            <h3 className='seconds-value'>
                {secondValue()}
            </h3>
        </div>
    )
}

export default Seconds;