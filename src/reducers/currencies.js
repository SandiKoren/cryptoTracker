import _ from "lodash";
import { FETCH_CURRENCIES, FETCH_CURRENCY } from "../actions/currency";

const currenciesReducerDefaultState = {};

export default (state = currenciesReducerDefaultState, action) => {
    switch (action.type) {
         case FETCH_CURRENCY:
            return { ...state, [action.id]: action.data[0] };
        case FETCH_CURRENCIES:
            return _.mapKeys(action.data, "id");
        default:
            return state;
    }
};
