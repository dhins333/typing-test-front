import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Countdown from 'react-countdown';




const Home = () => {
    
    const dispatch = useDispatch();
    const [matchmaking,socket,words,position] = useSelector((state) => {
        return [state.matchmaking,state.socket,state.words,state.position];
    })

    useEffect(() => {
        socket.connect();
        dispatch({type:'reset'});
        
        socket.on('matched',(data) => {
            dispatch({type:'set_matchmaking',value:'matched'});
            dispatch({type:'fill_words',words:data})
            setTimeout(()=>{
                dispatch({type:'set_matchmaking',value:'ready'})
            },5000);
        });
        
        socket.on('op_disconnect',(data) => {
            console.log(data);
        })

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
                <div className = 'word-box'>{words.map((word,index) => {
                    return <p className = {index === position ? 'active-p inline-p':'inline-p'}>{word} </p>
                })}</div>
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