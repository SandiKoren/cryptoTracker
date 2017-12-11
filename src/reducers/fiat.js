import { CHANGE_FIAT } from "../actions/fiat";

const fiatReducerDefaultState = {
    fiat: "eur"
};

export default (state = fiatReducerDefaultState, action) => {
    switch (action.type) {
        case CHANGE_FIAT:
            return {
                fiat: action.fiat
            }
        default:
            return state;
    }
};
