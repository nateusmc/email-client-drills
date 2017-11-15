import React from 'react';
import Sidebar from './sidebar';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import SingleEmail from './single-email';
import EmailList from './email-list';
import './email.css';

export default function Email() {
    return (
        <Router>
        <div className="email">
            <Sidebar />
            <main>
                <Switch>
                <EmailList folderId="inbox" />
                {<Route exact path="/:folderId" component={EmailList} />}
                {<Route exact path="/:folderId/:emailID" component={SingleEmail} />}
                </Switch>
            </main>
        </div>
        </Router>
    );
}
