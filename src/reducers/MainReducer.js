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
        case 'fill_words':
            return {...state,words:[...action.words],roundState:'not started'}
        case 'add_socket':
            return {...state,socket:action.socket};
        case 'reset':
            return {...state,    
            roundState:'loading',
            words:[],
            position:0,
            wpm:0,
            accuracy:0}
        case 'remove_socket':
            return {...state,socket:undefined}
        default:
            return state;
    }
}

export default MainReducer;