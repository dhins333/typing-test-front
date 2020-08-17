import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import MainReducer from '../reducers/MainReducer';


const store = createStore(MainReducer,{
    roundState:'loading',
    words:[],
    position:0,
    wpm:0,
    accuracy:0
},applyMiddleware(thunk));

export default store;