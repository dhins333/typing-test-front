import React,{ useState, useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';

const Input = () => {

    const [inputValue,setInput] = useState('');
    const dispatch = useDispatch();
    const [roundState,position,words] = useSelector((state) => {
        return [state.roundState,state.position,state.words];
    })
    const inputRef = React.createRef();
    
    useEffect(() => {
        inputRef.current.focus();
    })


    const onInputChange = (e) => {
        if(e.target.value === ' '){
            setInput('');
        }
        else if(roundState === 'not started'){
            setInput(e.target.value);
            dispatch({type:'start_round'})
            setTimeout(() => {
                setInput('');
                dispatch({type:'end_round'});
            },59000)
        }
        else{
            setInput(e.target.value);
        }
    }


    const onInputKeyDown = (e) => {
        if(roundState === 'started'){
            if(e.key === ' '){
                if(e.target.value === words[position]){
                    dispatch({type:'calculate_wpm'});
                }
                dispatch({type:'incerement_position'})
                dispatch({type:'calculate_accuracy'})
                setInput('');
            }
        }
    }

    return(
        <div className = 'input-container'>
            <input type='text' className='input-text' value = {inputValue} onChange = {onInputChange} onKeyDown = {onInputKeyDown} disabled = {roundState === 'ended' || position === words.length || roundState === 'loading'} ref = {inputRef}/>
        </div>
    )
}

export default Input;