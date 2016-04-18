import { UPPERCASE, LOWERCASE, WORD_LENGTH } from "../actions";

export default (state = {words: []}, action) => {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case UPPERCASE:
            newState.words = newState.words.map(word => ({ value: word.value, displayValue: word.displayValue.toUpperCase(), filtered: word.filtered }) );
            return newState;
        case LOWERCASE:
            newState.words = newState.words.map(word => ({ value: word.value, displayValue: word.displayValue.toLowerCase(), filtered: word.filtered }) );
            return newState;
        case WORD_LENGTH:
            newState.words = newState.words.map(word => ({ value: word.value, displayValue: word.displayValue, filtered: word.displayValue.length > action.wordLength }) );
            return newState;
        default:
            return state;
    }
};