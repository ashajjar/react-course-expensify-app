import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import HomePage from '../components/HomePage';
import CreatePage from '../components/CreatePage';
import UpdatePage from '../components/UpdatePage';
import HelpPage from '../components/HelpPage';
import AboutPage from '../components/AboutPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" exact component={HomePage}  />
                <Route path="/create" component={CreatePage} />
                <Route path="/update" component={UpdatePage} />
                <Route path="/help" component={HelpPage} />
                <Route path="/about" component={AboutPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;