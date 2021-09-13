import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import MainPage from "./MainPage";

import '../css/style.css';

import Header from './Header'

const App = () => {
    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route path="/" component={MainPage} />
                </Switch>
            </Router>
        </div>
    )
}

export default App;