

export const increment = (nr) => {
    return {
        type: 'INCREMENT',
        payload: nr
    };
};

export const decrement = (nr) => {
    return {
        type: 'DECREMENT',
        payload: nr
    };
};

export const addTodo = (id, label, list) => {
    return {
        type: 'ADD_TODO',
        payload: { id, label, list }
    };
};

export const removeTodo = (id) => {
    return {
        type: 'REMOVE_TODO',
        payload: { id }
    };
};

export const moveTodo = (listInputs, finalList) => {
    return {
        type: 'MOVE_TODO',
        payload: { listInputs, finalList }
    };
};

export const listMovies = (listMovies) => {
    return {
        type: 'LIST_MOVIES',
        payload: { listMovies }
    };
};

export const searchMovie = (search, dispatch) => {
    return {
        type: 'SEARCH_MOVIE',
        payload: { search, dispatch }
    }
}