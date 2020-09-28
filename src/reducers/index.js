import counterReducer from './counter';
import loggedReducer from './isLogged';
import todosReducer from './todo';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    todo: todosReducer,
})

export default allReducers;