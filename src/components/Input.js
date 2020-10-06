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
        if(roundState === 'started'){
            if(e.target.value.endsWith(' ')){
                if(e.target.value.trim() === words[position]){
                    dispatch({type:'calculate_wpm'});
                }
                dispatch({type:'increment_position'})
                dispatch({type:'calculate_accuracy'})
                setInput('');
            }else{
                setInput(e.target.value);
            }
        }
        else {
            setInput(e.target.value);
            dispatch({type:'start_round'})
            setTimeout(() => {
                setInput('');
                dispatch({type:'end_round'});
            },59000)
        }
    }

    return(
        <div className = 'input-container'>
            <input type='text' className='input-text' value = {inputValue} onChange = {onInputChange}  disabled = {roundState === 'ended' || position === words.length || roundState === 'loading'} ref = {inputRef}/>
        </div>
    )
}

export default Input;