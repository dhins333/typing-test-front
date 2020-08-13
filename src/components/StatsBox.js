import React from 'react';
import Accuracy from './Accuracy';
import Seconds from './Seconds';
import WPM from './WPM';

const StatsBox = () => {
    return(
        <div className='statsbox'>
            <Accuracy/>
            <WPM/>
            <Seconds/>
        </div>
    )
}

export default StatsBox;