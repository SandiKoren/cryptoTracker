import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import currenciesReducer from '../reducers/currencies';
import languageReducer from '../reducers/language';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            currencies: currenciesReducer,
            language: languageReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};
