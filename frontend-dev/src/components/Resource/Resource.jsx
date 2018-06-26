import React from "react";
import { connect } from 'react-redux';
import { Jumbotron, Button, Grid, Row, Col, Image } from 'react-bootstrap'
import sathish from '../../raw/sathish.jpg'
import { BACKEND } from "../../util/Constant";
import { history } from "../../util/history";
import { CustomNavbar } from "../CustomNavBar";
import './resource.css'

class Resource extends React.Component {

    logOffClicked = (e) => {
        history.push(BACKEND.LOGIN_URL)
    }

    render() {
        return (
            <div>
                <CustomNavbar />
                <Grid>
                    <Jumbotron>
                        <center>
                            <h1>Welcome to Resource Management</h1>

                            <Button onClick={this.logOffClicked} bsStyle="success">Log Off</Button>

                        </center>
                    </Jumbotron>

                    <Row className="show-grid-text-center">
                        <Col xs={12} sm={12} className="person-wrapper">
                            <center>
                                <Image src={sathish} circle className="profile-pic" />
                                <br /><br />Design and developed by
                            <h3>Sathish Venkatesh Dustakar</h3>
                                <Button bsStyle="danger" href="https://mun-sathish.firebaseapp.com" target="_blank">About Developer</Button>
                            </center>
                        </Col>
                    </Row>
                </Grid>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.UserLoginReducer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(Resource);
export { connectedApp as Resource };