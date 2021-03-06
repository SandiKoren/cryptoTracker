import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { startFetchCurrencies } from './actions/currency';
import AppRouter from './routes/routes';
import configureStore from './store/store';

import 'normalize-css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
