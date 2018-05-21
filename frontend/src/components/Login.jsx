import React from "react";
import { connect } from 'react-redux';
import { performLogin } from '../action/login_action'
import { Jumbotron, Grid, Form, FormGroup, Col, FormControl, Button, ControlLabel } from 'react-bootstrap'

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    componentDidUpdate = (prevState, currentState) => {
        if (this.props.user.statusCode !== null && this.props.user.statusCode === 0)
            this.props.history.push("/resource/home");
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

                <Form onSubmit={(e) => e.preventDefault() } horizontal>
                    <FormGroup >
                        <Col componentClass={ControlLabel} sm={2}>Username
                         </Col>
                        <Col sm={10}>
                            <FormControl defaultValue={this.state.username} onChange={this.changeUsername}  type="text" placeholder="Username" />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={2}>
                            Password
                        </Col>
                        <Col sm={10}>
                            <FormControl defaultValue={this.state.password} onChange={this.changePassword} type="password" placeholder="Password" />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button onClick={this.handleLoginBtn} type="submit">Sign in</Button>
                        </Col>
                    </FormGroup>
                </Form>


                {/* Username: <input defaultValue={this.state.username} onChange={this.changeUsername} type="text" /><br />
                Password: <input defaultValue={this.state.password} onChange={this.changePassword} type="password" /><br />
                <input type="submit" onClick={this.handleLoginBtn} /> */}
            </Grid>

        );
    }
}


const mapStateToProps = (state) => {
    return {
        user: state.userLoginDetails.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        performLogin: (loginCred) => dispatch(performLogin(loginCred))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);