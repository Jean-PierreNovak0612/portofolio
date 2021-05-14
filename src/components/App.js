import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Header';
import HomePage from './HomePage';
import { NAV_LINKS } from '../data';

import '../css/style.css';

const App = () => {
    return (
        <div>
            <Router basename={process.env.PUBLIC_URL}>
                <Header links={NAV_LINKS} />
                <Switch>
                    <Route path="/" component={HomePage} />
                </Switch>
            </Router>
        </div>
    )
}

export default App;