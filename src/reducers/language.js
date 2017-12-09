import _ from "lodash";

import { CHANGE_LANGUAGE } from "../actions/changeLanguage";

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
