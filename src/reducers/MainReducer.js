const MainReducer = (state,action) => {
    switch(action.type){
        case 'start_round':
            return {...state,roundState:'started'};
        case 'end_round':
            return {...state,roundState:'ended'};
        case 'incerement_position':
            return {...state,position:state.position+1}
        case 'calculate_wpm':
            return {...state,wpm:state.wpm+1}
        case 'calculate_accuracy':
            return {...state,accuracy:Math.round((state.wpm/state.position) * 100)}
        default:
            return state;
    }
}

export default MainReducer;