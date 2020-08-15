import React,{ useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';

const Input = () => {

    const [inputValue,setInput] = useState('');
    const dispatch = useDispatch();
    const roundState = useSelector((state) => {
        return state.roundState;
    })


    const onInputChange = (e) => {
        if(e.target.value === ' '){
            setInput('');
        }
        else{
            if(roundState === 'not started'){
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
    } 

    const onInputKeyDown = (e) => {
        if(roundState === 'started'){
            if(e.key === ' '){
                setInput('');
            }
        }
    }

    return(
        <div className = 'input-container'>
            <input type='text' className='input-text' value = {inputValue} onChange = {onInputChange} onKeyDown = {onInputKeyDown} disabled = {roundState === 'ended'}/>
        </div>
    )
}

export default Input;