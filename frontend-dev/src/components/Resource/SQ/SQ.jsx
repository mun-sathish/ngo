import React from "react";
import { connect } from 'react-redux';
import { securityActions } from '../../../action'
import { CustomNavbar } from "../../CustomNavBar";
import { Jumbotron, ControlLabel, FormControl, Grid, Row, Col, Button } from 'react-bootstrap'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'

class SQ extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            question: ""
        }
    }

    handleQuestion = (e) => {
        this.setState({ question: e.target.value });
    }

    handleAddClick = (e) => {
        this.props.addSQ(this.state)
    }

    handleDeleteClick = (sid) => {
        this.props.deleteSQ({ security_question_id: sid});
    }


    componentDidMount() {
        this.props.fetchSecurityQuestion()
    }

    deleteCell = (cell, row) => {
        return (
            <Button bsStyle="danger" onClick={() => this.handleDeleteClick(row.security_question_id)}>Delete</Button>
        )
    }

    render() {
        return (
            <div>
                <CustomNavbar />
                <Grid>
                    <Row>
                        <Col xs={12}>
                            <ControlLabel>Secuirty Question</ControlLabel>
                            <FormControl
                                type="text"
                                name="name"
                                placeholder="Enter Secuirty Question"
                                defaultValue={this.state.question} onChange={this.handleQuestion}
                            />
                        </Col>
                        <Col xs={4}>
                            <Button type="submit" onClick={this.handleAddClick} bsStyle="primary">ADD</Button>
                        </Col>
                    </Row>
                </Grid>

                <hr />

                <Grid>
                    <Row>
                        <Jumbotron>
                            <h1><center><bold>Resource:</bold> All Security Question</center></h1>
                        </Jumbotron>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <BootstrapTable data={this.props.sq} stripped hover condensed options={{ noDataText: 'There is no data to display' }} pagination>
                                <TableHeaderColumn width='100' dataAlign="center" dataFormat={this.deleteCell} />
                                <TableHeaderColumn isKey width='100' dataField='security_question_id' dataAlign="center" tdStyle={{ whiteSpace: 'normal' }}>ID</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='question' dataAlign="center" tdStyle={{ whiteSpace: 'normal' }}>Security Question</TableHeaderColumn>

                            </BootstrapTable>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        sq: state.SecurityQuestionReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSecurityQuestion: () => dispatch(securityActions.fetchSecurityQuestion()),
        addSQ: (question) => dispatch(securityActions.addSQ(question)),
        deleteSQ: (sid) => dispatch(securityActions.deleteSQ(sid))
    };
};

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(SQ);
export { connectedApp as SQ };