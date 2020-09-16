import React,{ useState } from 'react';
import { useSelector } from 'react-redux';

const InputBox = ({words,position}) => {

    const [InputBoxState,setInputBox] = useState('');
    const wpm = useSelector((state) => {
        return state.wpm;
    })

    const onInputBoxChange = (e) => {
        if(e.target.value === ' '){
            setInputBox('');
        }
        else{
            setInputBox(e.target.value.trim());
        }
    }

    const onInputKeyDown = (e) => {
        if(e.key === ' '){
            if(e.target.value === words[position] ){
                console.log('correct');
                setInputBox('');
            }
        }
    }

    return(
        <input type = 'text' className='input-box' value = {InputBoxState} onChange = {onInputBoxChange} onKeyDown = {onInputKeyDown} ></input>
    )

}

export default InputBox;