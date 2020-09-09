import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const Home = () => {
    
    const dispatch = useDispatch();
    const [matchmaking,socket] = useSelector((state) => {
        return [state.matchmaking,state.socket];
    })

    useEffect(() => {
        socket.connect();
        dispatch({type:'reset'});
    },[dispatch,socket])

    const findMatch = () => {
        dispatch({type:'set_matchmaking',value:'searching'})
        socket.emit('queue');
    }

    const renderContent = () => {
        if(matchmaking === 'searching'){
            return(
                <div className = 'find-status' >Searching...</div>
            )
        }
    }

    socket.on('matched',(data) => {
        console.log(`matched with ${data}`)
    });
    
    socket.on('op_disconnect',(data) => {
        console.log(data);
    })

    return(
        <div className = 'home'>
            {
                matchmaking === undefined ? <div className = 'find-button' onClick = {findMatch}>Find Match</div> : renderContent()
            }
        </div>
    )
}

export default Home;