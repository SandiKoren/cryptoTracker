import _ from "lodash";
import { FETCH_CURRENCIES } from "../actions/getCurrencies";

const currenciesReducerDefaultState = {};

export default (state = currenciesReducerDefaultState, action) => {
    switch (action.type) {
        case FETCH_CURRENCIES:
        // assigning id key to object
            return _.mapKeys(action.data, "id");
        default:
            return state;
    }
};
