import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div className="columns is-mobile is-centered">
        <div className="column is-half is-narrow no-page-text">
            WOOPS, WE ARE IN TROUBLE, GO BACK NOW! RUUUUN - <Link to="/">Go home</Link>
        </div>
    </div>
);

export default NotFoundPage;