import { createStore } from 'redux';
import MainReducer from '../reducers/MainReducer';


const store = createStore(MainReducer,{
    roundState:'not started'
});

export default store;