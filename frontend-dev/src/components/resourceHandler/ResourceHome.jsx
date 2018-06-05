import React from "react";
import { Jumbotron, Button, Grid, Row, Col, Image } from 'react-bootstrap'
import store from '../../store/store'
import sathish from '../../raw/sathish.jpg'

export default class ResourceHome extends React.Component {

    logOffClicked = (e) => {
        window.location.href="/"
    }

    componentDidMount(){
        let user = store.getState().userLoginDetails.user;
        if(user.statusCode === null || (user.statusCode !== null && user.statusCode !== 0))
            window.location.href="/";
    }

    render() {
        return (
                <div>
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
                            <Image src={sathish} circle className="profile-pic"  />
                            <br/><br/>Design and developed by
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