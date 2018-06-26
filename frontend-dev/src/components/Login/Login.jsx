import React from "react";
import { connect } from 'react-redux';
import { loginActions } from '../../action'
import { Jumbotron, Grid, Form, FormGroup, Col, FormControl, Button, ControlLabel } from 'react-bootstrap'
import { BACKEND } from "../../util/Constant";
import { history } from "../../util/history";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
        this.props.userLogout();
    }

    componentDidUpdate = (prevState, currentState) => {
        if (this.props.user && this.props.user.loggedIn )
            history.push(BACKEND.RESOURCE_URL);
        return currentState;
    }

    changeUsername = (e) => {
        this.setState({ username: e.target.value });
    }

    changePassword = (e) => {
        this.setState({ password: e.target.value });
    }

    handleLoginBtn = (e) => {
        this.props.performLogin(this.state);
    }

    render() {
        return (
            <Grid>
                <Jumbotron>
                    <h1><center>Awaken Yourself Within You</center></h1>
                    <h4><center>Admin Login</center></h4>
                </Jumbotron>
                <Form onSubmit={(e) => e.preventDefault()} horizontal>
                    <FormGroup >
                        <Col componentClass={ControlLabel} sm={2}>Username
                         </Col>
                        <Col sm={10}>
                            <FormControl defaultValue={this.state.username} onChange={this.changeUsername} type="text" placeholder="Username" autoComplete="username" />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={2}>
                            Password
                        </Col>
                        <Col sm={10}>
                            <FormControl defaultValue={this.state.password} onChange={this.changePassword} type="password" placeholder="Password" autoComplete="current-password" />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button onClick={this.handleLoginBtn} type="submit">{(this.props.user.loading) ? <span>Loading...</span> : <span>Sign in</span>}</Button>
                        </Col>
                        <Col smOffset={2} sm={10}>
                            {this.props.user.error && <div style={{ marginTop: 10 }}>Invalid Login Credentials</div>}
                        </Col>
                    </FormGroup>
                </Form>
            </Grid>

        );
    }
}


const mapStateToProps = (state) => {
    return {
        user: state.UserLoginReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        userLogout: () => dispatch(loginActions.userLogout()),
        performLogin: (loginCred) => dispatch(loginActions.performLogin(loginCred))
    };
};


const connectedApp = connect(mapStateToProps, mapDispatchToProps)(Login);
export { connectedApp as Login };