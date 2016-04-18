import { UPPERCASE, LOWERCASE } from "../actions";

export default (state = {words: []}, action) => {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case UPPERCASE:
            newState.words = newState.words.map(word => word.toUpperCase());
            return newState;
        case LOWERCASE:
            newState.words = newState.words.map(word => word.toLowerCase());
            return newState;
        default:
            return state;
    }
};