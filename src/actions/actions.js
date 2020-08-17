import axios from 'axios';

const populateWords = () => {
    return async (dispatch) => {
        const words = await axios.get('/api/words');
        dispatch({type:'fill_words',words:words.data});
    }
}

export {populateWords};