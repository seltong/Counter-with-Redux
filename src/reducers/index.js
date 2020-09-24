import counterReducer from './counter';
import loggedReducer from './isLogged';
import todoReducer from './todo'
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    todo: todoReducer
})

export default allReducers;