import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Header'
import { NAV_LINKS } from '../data';

import '../css/style.css';

const App = () => {
    return (
        <div>
            <Router basename={process.env.PUBLIC_URL}>
                <Header links={NAV_LINKS} />
                <Switch>
                </Switch>
            </Router>
        </div>
    )
}

export default App;