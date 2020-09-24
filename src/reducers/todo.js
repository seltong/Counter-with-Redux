function add(value, array) {
    array.push(value);
    return array;
}

const todoReducer = (state = [''], action) => {
    switch (action.type) {
        case 'ADDTODO':
            return add(action.payload, state)
        default:
            return state
    }
}

export default todoReducer;