import React from "react";
import { connect } from 'react-redux';
import {performLogin} from '../action/login_action'

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username : "",
            password : ""
        }
    }

    componentDidUpdate = (prevState, currentState) => {
        if (this.props.user.statusCode !== null && this.props.user.statusCode === 0)
            this.props.history.push("/resource");
        return currentState;
    }

    changeUsername = (e) => {
        this.setState({username : e.target.value});
    }
    
    changePassword = (e) => {
        this.setState({ password: e.target.value });
    }

    handleLoginBtn = (e) => {
        this.props.performLogin(this.state);
        // this.props.history.push("/home");
    }

    render() {
        return (
            <div >
                {/* <form onSubmit={this.handleLoginBtn}> */}
                        Username: <input defaultValue={this.state.username}  onChange={this.changeUsername} type="text" /><br/>
                    Password: <input defaultValue={this.state.password} onChange={this.changePassword}  type="password" /><br />
                        <input type="submit" onClick={this.handleLoginBtn} />
                    {/* </form> */}
            </div>
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