import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { populateWords } from '../actions/actions';

const TextBox = () => {

    const [words,position] = useSelector((state) => {
        return [state.words,state.position];
    })

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(populateWords());
    // eslint-disable-next-line
    },[]);


    return(
        <div className='textbox'>
            <div className = 'text'>
                {words.slice(position).map((word,index) => {
                    return (<span key = {index} className = 'text-element'>{word} </span>)
                })}
            </div>
        </div>
    )
}

export default TextBox;