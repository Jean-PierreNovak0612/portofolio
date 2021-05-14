import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import { NAV_LINKS, FOOTER_LINKS, SOCIAL_LINKS } from '../data';

import '../css/style.css';

const App = () => {
    return (
        <div>
            <Router basename={process.env.PUBLIC_URL}>
                <Header links={NAV_LINKS} />
                <Switch>
                </Switch>
                <Footer links={FOOTER_LINKS} social={SOCIAL_LINKS} />
            </Router>
        </div>
    )
}

export default App;