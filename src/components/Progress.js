import React from 'react';
import { useSelector } from 'react-redux';

const Progress = () => {

    const [user,op] = useSelector((state) => {
        return [state.user_pos,state.op_pos]
    })

    return(
        <div className = 'progress'>
            <h3 className='title'>YOU:</h3>
            <input type='range' min='0' max = '10' value={user} className = 'user-slider'></input>
            <h3 className='title'>OPPONENT:</h3>
            <input type='range' min='0' max = '10' value={op} className = 'op-slider'></input>
        </div>
    )
}

export default Progress;