const todoReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADDTODO':
            return [ ...state, action.payload];
        default:
            return state
    }
}

export default todoReducer;