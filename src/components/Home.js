import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WordBox from './WordBox';
import InputBox from './InputBox';
import Progress from './Progress';


const Home = () => {
    
    const dispatch = useDispatch();
    const [matchmaking,socket,words,position] = useSelector((state) => {
        return [state.matchmaking,state.socket,state.words,state.position];
    })

    useEffect(() => {
        socket.connect();   
             
        socket.on('matched',(data) => {
            dispatch({type:'fill_words',words:data})
            dispatch({type:'set_matchmaking',value:'ready'});
        });
        
        socket.on('op_disconnect',(data) => {
            if(matchmaking !== 'win' || matchmaking !== 'lose'){
                dispatch({type:'disconnect'});
            }
        })

        socket.on('op_progress',(data) => {
            dispatch({type:'increment_op_pos'});
        })

        socket.on('lose',() => {
            dispatch({type:'lose'});
        })

        return () => {
            dispatch({type:'remove_matchmaking'});
            dispatch({type:'reset_position'});
            dispatch({type:'clear_points'});
            dispatch({type:'clear_user_op_pos'});
            socket.disconnect();
        }
    //eslint-disable-next-line
    },[dispatch,socket])

    const findMatch = () => {
        dispatch({type:'set_matchmaking',value:'searching'})
        socket.emit('queue');
    }

    const renderContent = () => {
        switch(matchmaking){
            case 'searching':
                return(
                    <div className = 'find-status' >Searching...</div>
                );

            case 'ready':
                return(
                    <>
                    <WordBox words = {words} position = {position}/>
                    <InputBox words = {words} position = {position}/>
                    <Progress />
                    </>
                )

            case 'win':
                return(
                    <>
                    <div className = 'win-text'>YOU WIN</div>
                    <div className = 'find-button' onClick = {() => {window.location.reload()}}>Try Again</div>
                    </>
                )

            case 'lose':
                return(
                    <>
                    <div className = 'lose-text'>OPPONENT WINS</div>
                    <div className = 'find-button' onClick = {() => {window.location.reload()}}>Try Again</div>
                    </>
                )

            default:
                return(
                    <>
                    <div className = 'lose-text'>OPPONENT DISCONNECTED</div>
                    <div className = 'find-button' onClick = {() => {window.location.reload()}}>Try Again</div>
                    </>
                );
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