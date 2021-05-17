import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Header';
import HomePage from './HomePage';
import ContactPage from './ContactPage';
import ProjectList from './ProjectList';
import AboutPage from './AboutPage';
import { NAV_LINKS, LIST_ITEMS, ARTICLE_LIST } from '../data';

import '../css/style.css';

const App = () => {
    return (
        <div>
            <Router basename={process.env.PUBLIC_URL}>
                <Header links={NAV_LINKS} />
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/contact" exact component={ContactPage} />
                    <Route path="/projects" exact component={() => <ProjectList listItems={LIST_ITEMS} />} />
                    <Route path="/about" exact component={() => <AboutPage contents={ARTICLE_LIST} />} />
                </Switch>
            </Router>
        </div>
    )
}

export default App;