import { CHANGE_LANGUAGE } from "../actions/language";

const languageReducerDefaultState = {
    language: "eur"
};

export default (state = languageReducerDefaultState, action) => {
    switch (action.type) {
        case CHANGE_LANGUAGE:
            return {
                language: action.language
            }
        default:
            return state;
    }
};
