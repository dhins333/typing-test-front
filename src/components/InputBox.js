import React,{ createRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const InputBox = ({words,position}) => {

    const [InputBoxState,setInputBox] = useState('');
    const [points,socket] = useSelector((state) => {
        return [state.points,state.socket];
    });
    const dispatch = useDispatch();
    const inputRef = createRef();

    useEffect(() => {
        inputRef.current.style.border = '1px solid #9cd4f4'
    }) 

    const onInputBoxChange = (e) => {

        if(e.target.value.endsWith(' ')){
            if(e.target.value.trim() === words[position] ){
                dispatch({type:'increment_position'});
                dispatch({type:'increase_points'});
                if(points === 60){
                    dispatch({type:'win'});
                    socket.emit('done');
                    return;
                }
                if(points % 6 === 0 && points !== 0){
                    socket.emit('progress');
                    dispatch({type:'increment_user_pos'});
                }
                setInputBox('');
            }
            else{
                inputRef.current.style.border = '1px solid red';
            }
        }
        else{
            setInputBox(e.target.value);
        }

    }


    return(
        <input type = 'text' className='input-box' value = {InputBoxState} onChange = {onInputBoxChange}  ref={inputRef} ></input>
    )

}

export default InputBox;