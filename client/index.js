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
            <Route path="address" component={Address} />
        </Route>
    </Router>
)


console.log(App);

ReactDOM.render(
    router,
    document.querySelector('#root')
);
