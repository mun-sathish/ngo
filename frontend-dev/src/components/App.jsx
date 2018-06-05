import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login.jsx'
import ResourceManager from './ResourceManager.jsx'
import { connect } from 'react-redux';

class App extends React.Component {

    render() {
        return (
            <Router basename="/ngo/frontend">
                <div>
                    <Route exact path="/" component={Login} />
                    <Route path="/resource" component={ResourceManager} />
                </div>
            </Router>
        )
    }
}

export default connect()(App);