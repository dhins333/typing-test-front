const MainReducer = (state,action) => {
    switch(action.type){
        case 'start_round':
            return {...state,roundState:'started'};
        case 'end_round':
            return {...state,roundState:'ended'};
        default:
            return state;
    }
}

export default MainReducer;