const MainReducer = (state,action) => {
    switch(action.type){
        case 'start_round':
            return {...state,roundState:'started'};
        case 'end_round':
            return {...state,roundState:'ended'};
        case 'increment_position':
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
        case 'remove_matchmaking':
            return {...state,matchmaking:undefined}
        case 'set_matchmaking':
            return {...state,matchmaking:action.value}
        case 'reset_position':
            return {...state,position:0}
        case 'clear_points':
            return {...state,points:0}
        case 'increase_points':
            return {...state,points:state.points+1}
        case 'increment_user_pos':
            return {...state,user_pos:state.user_pos+1}
        case 'increment_op_pos':
            return {...state,op_pos:state.op_pos+1}
        case 'clear_user_op_pos':
            return {...state,op_pos:0,user_pos:0}
        case 'win':
            return {...state,matchmaking:'win'}
        case 'lose':
            return {...state,matchmaking:'lose'}
        case 'disconnect':
            return {...state,matchmaking:'disconnect'}
        case 'set_round_state':
            return {...state,roundState:action.value}
        default:
            return state;
    }
}
export default MainReducer;