import { AccordionActions } from "@material-ui/core";

const filmsReducer = (state = [], action) => {
    switch (action.type) {
        case 'LIST_MOVIES': {
            return action.payload.list
        }
        default:
            return state
    }
}

export default filmsReducer;