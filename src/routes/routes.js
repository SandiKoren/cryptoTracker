import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CurrenciesList from '../components/CurrenciesList';
import NotFoundPage from '../components/NotFoundPage';
import CurrencyDetails from '../components/CurrencyDetails';
import Settings from '../components/Settings'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route exact path="/" component={CurrenciesList} />
                <Route exact path="/settings" component={Settings} />
                <Route exact path="/currencies/:id" component={CurrencyDetails} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
