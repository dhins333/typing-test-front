import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Countdown from 'react-countdown';
import WordBox from './WordBox';
import InputBox from './InputBox';


const Home = () => {
    
    const dispatch = useDispatch();
    const [matchmaking,socket,words,position] = useSelector((state) => {
        return [state.matchmaking,state.socket,state.words,state.position];
    })

    useEffect(() => {
        socket.connect();   
             
        socket.on('matched',(data) => {
            dispatch({type:'set_matchmaking',value:'matched'});
            dispatch({type:'fill_words',words:data})
            setTimeout(()=>{
                dispatch({type:'set_matchmaking',value:'ready'})
            },5000);
        });
        
        socket.on('op_disconnect',(data) => {
            alert(data);
        })

        return () => {
            dispatch({type:'remove_matchmaking'});
            dispatch({type:'reset_position'});
            dispatch({type:'clear_points'});
            socket.disconnect();
        }

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
        else if(matchmaking === 'matched'){
            return(
                <h1 className = 'matched-counter'><Countdown date={Date.now() + 5000} renderer={props => <div>{props.seconds}</div>}/></h1>
            )
        }
        else if(matchmaking === 'ready'){
            return(
                <>
                <WordBox words = {words} position = {position}/>
                <InputBox words = {words} position = {position}/>
                </>
            )
        }
    }

 

    return(
        <div className = 'home'>
            {
                matchmaking === undefined ? <div className = 'find-button' onClick = {findMatch}>Find Match</div> : renderContent()
            }
        </div>
    )
}

export default Home;