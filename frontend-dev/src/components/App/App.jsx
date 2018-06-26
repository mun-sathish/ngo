import React from "react";
import { Router, Route, Switch } from 'react-router-dom';
import { Login } from '../Login'
import { Resource } from '../Resource'
import { connect } from 'react-redux';
import { history } from '../../util/history'
import { BACKEND } from "../../util/Constant";
import { PrivateRoute } from '../PrivateRoute'
import { NotFound } from "../NotFound/NotFound";
import { Book, Video, Audio, Task, SQ } from '../Resource'

class App extends React.Component {

    render() {
        return (
            <Router history={history}>
            
                <div>
                <Switch>
                    <Route path={BACKEND.LOGIN_URL} component={Login} />
                    <PrivateRoute exact path={BACKEND.RESOURCE_URL} component={Resource} />
                    <PrivateRoute path={BACKEND.BOOK_URL} component={Book} />
                    <PrivateRoute path={BACKEND.AUDIO_URL} component={Audio} />
                    <PrivateRoute path={BACKEND.VIDEO_URL} component={Video} />
                    <PrivateRoute path={BACKEND.TASK_URL} component={Task} />
                    <PrivateRoute path={BACKEND.SQ_URL} component={SQ} />
                    <Route path="*" component={NotFound} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

const connectedApp = connect()(App);
export { connectedApp as App };