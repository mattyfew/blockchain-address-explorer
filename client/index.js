import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './src/App'
import Main from './src/Main'
import Address from './src/Address'

require("./stylesheet.css");


const router = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Main} />
            <Route path="address/:address" component={Address} />
        </Route>
    </Router>
)

ReactDOM.render(
    router,
    document.querySelector('#root')
);
