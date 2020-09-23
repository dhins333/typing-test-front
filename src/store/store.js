import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import MainReducer from '../reducers/MainReducer';
import io from 'socket.io-client';
const socket = io();

const store = createStore(MainReducer,{
    roundState:'loading',
    words:[],
    position:0,
    wpm:0,
    accuracy:0,
    socket,
    matchmaking:undefined,
    points:0,
    user_pos:0,
    op_pos:0
},applyMiddleware(thunk));

export default store;