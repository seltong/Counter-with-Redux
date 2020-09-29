import counterReducer from './counter';
import loggedReducer from './isLogged';
import todosReducer from './todo';
import moviesReducer from './movies';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    todo: todosReducer,
    movies: moviesReducer,
})

export default allReducers;