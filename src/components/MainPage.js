import React, { useEffect } from 'react';
import StatsBox from './StatsBox';
import TextBox from './TextBox';
import Input from './Input';
import Result from './Result';
import { useSelector, useDispatch } from 'react-redux';

const MainPage = () => {

    const dispatch = useDispatch();
    const socket = useSelector((state) => {
        return state.socket;
    })
    
    useEffect(() => {
        dispatch({type:'remove_matchmaking'});
        socket.disconnect();
    })

    const roundState = useSelector((state) => {
        return(state.roundState);
    })

    return(
        <div className = 'mainpage'>
            {roundState === 'ended' ? <Result /> : undefined}
            <StatsBox/>
            <TextBox/>
            <Input/>
        </div>
    )
}

export default MainPage;