// const todoReducer = (state = [], action) => {
//     switch (action.type) {
//         case 'ADD_TODO':
//             return [ ...state, action.payload];
//         case 'REMOVE_TODO': {
//             const newState = state;
//             newState.splice(action.payload, 1)
//             return [...newState];
//         }
//         default:
//             return state
//     }
// }

const todosReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO': {
            return [...state, action.payload];
        }
        case 'REMOVE_TODO': {
            const newState = state;
            return [...newState.filter((todo) => todo.id !== action.payload.id)];
        }
        case 'MOVE_TODO': {
            const newState = state;

            newState.forEach(todo => {
                action.payload.listInputs.forEach((input, index) => {
                    if (todo.id === parseInt(input.id)) {
                        todo.list = action.payload.finalList;
                    }
                })
            });

            return [...newState];
        }
        default:
            return state
    }
}

export default todosReducer;
//newState.splice(action.payload.id, 1)