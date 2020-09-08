import React, { useEffect } from 'react';
import io from 'socket.io-client';
import { useDispatch } from 'react-redux';

const Home = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch({type:'reset'})
    },[dispatch])

    const findMatch = () => {
        const socket = io();
        dispatch({type:'add_socket',socket});
    }

    return(
        <div className = 'home'>
            <div className = 'find-button' onClick = {findMatch}>Find Match</div>
        </div>
    )
}

export default Home;