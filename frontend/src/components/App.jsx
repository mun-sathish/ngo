import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login.jsx'
import SecurityQuestion from './SecurityQuestion.jsx'
import ResourceManager from './ResourceManager.jsx'
import { connect } from 'react-redux';

 class App extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Login} />
                    <Route path="/security-question" component={SecurityQuestion} />
                    <Route path="/resource" component={ResourceManager} />
                    {/* <Route path='/list' render={(props) => (
                        <Books {...props} books={this.props.books} />
                    )} /> */}
                </div>
            </Router>
        )
    }
}

export default connect()(App);