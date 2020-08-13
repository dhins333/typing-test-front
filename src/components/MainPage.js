import React from 'react';
import StatsBox from './StatsBox';
import TextBox from './TextBox';
import Input from './Input';

const MainPage = () => {
    return(
        <div className = 'mainpage'>
            <StatsBox/>
            <TextBox/>
            <Input/>
        </div>
    )
}

export default MainPage;