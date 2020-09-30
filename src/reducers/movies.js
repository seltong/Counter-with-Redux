// Redux
import { listMovies } from '../actions';
import api from '../api';

const moviesReducer = (state = [], action) => {
    switch (action.type) {
        case 'LIST_MOVIES': {
            return action.payload.listMovies;
        }
        case 'SEARCH_MOVIE': {
            api.get(action.payload.search).then(res => action.payload.dispatch(listMovies(res.data)))
            return state;
        }
        default:
            return state
    }
}

export default moviesReducer;