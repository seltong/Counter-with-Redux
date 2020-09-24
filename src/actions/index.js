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

export const addTodo = (value) => {
    return {
        type: 'ADDTODO',
        payload: value
    };
};