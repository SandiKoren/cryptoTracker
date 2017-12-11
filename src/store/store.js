import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import currenciesReducer from '../reducers/currencies';
import fiatReducer from '../reducers/fiat';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            currencies: currenciesReducer,
            fiat: fiatReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};
