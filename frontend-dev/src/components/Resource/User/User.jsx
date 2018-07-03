import React from "react";
import { connect } from 'react-redux';
import { CustomNavbar } from "../../CustomNavBar";
import { resourceActions } from '../../../action'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import { Jumbotron, Col, Button, Grid, Row, Checkbox } from 'react-bootstrap'
import { Modal, InputNumber } from 'antd';
const confirm = Modal.confirm;

class User extends React.Component {


    componentDidMount() {
        this.props.fetchAllUser();
    }

    handleDeleteClick = (obj) => {
        let me = this;
        confirm({
            title: <div>Are you sure to totally remove <b>{obj.name}</b></div>,
            onOk() {
                me.props.deleteUser(obj.username);
            },
            onCancel() { },
        });
    }

    handleUpdateClick = (obj) => {
        let modalContent = <div></div>;
        let modalTitle = "";
        let validity = 30;
        let me = this;
        if (obj.is_premium === '1') {
            modalTitle = "REMOVE PREMIUM ACCESS"
            modalContent = <div>
                Are you sure want to remove the premium access for the user: <b>{obj.name}</b>
            </div>
        } else {
            modalTitle = "MAKE USER PREMIUM"
            modalContent = <div>
                Select Validity (Days):
                <InputNumber style={{ marginLeft: 10 }} min={1} defaultValue={validity} onChange={(val) => {
                    validity = val;
                }} />
            </div>
        }

        Modal.confirm({
            title: modalTitle,
            okText: 'Update',
            content: modalContent,
            onOk() {
                let userJson = {}
                if (obj.is_premium === '1') {
                    userJson = {
                        username: obj.username,
                        is_premium: 0,
                    }
                } else {
                    userJson = {
                        username: obj.username,
                        is_premium: 1,
                        validity: validity
                    }
                }
                me.props.updateUserPremium(userJson);
            },
            onCancel() { }
        });
    }

    deleteCell = (cell, row) => {
        return (
            <Button bsStyle="danger" onClick={() => this.handleDeleteClick(row)}>Delete User</Button>
        )
    }

    updateCell = (cell, row) => {
        return (
            <Button bsStyle="success" onClick={() => this.handleUpdateClick(row)}>Update</Button>
        )
    }

    checkboxCell = (cell, row) => {
        if (cell === '1')
            return (<Checkbox checked={true} ></Checkbox>)
        else
            return (<Checkbox checked={false} ></Checkbox>)

    }

    render() {
        return (
            <div>
                <CustomNavbar />
                <Grid>
                    <Row>
                        <Col>
                            <Jumbotron>
                                <h1><center><bold>User Management</bold></center></h1>
                            </Jumbotron>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <BootstrapTable data={this.props.users} stripped hover condensed options={{ noDataText: 'There is no data to display' }} pagination search >
                                <TableHeaderColumn width='100' dataAlign="center" dataFormat={this.deleteCell} />
                                <TableHeaderColumn width='100' dataAlign="center" dataFormat={this.updateCell} />
                                <TableHeaderColumn width='100' dataField='username' dataSort={true} isKey dataAlign="center" tdStyle={{ whiteSpace: 'normal' }} >Username</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataSort={true} dataField='name' dataAlign="center" tdStyle={{ whiteSpace: 'normal' }} >Full Name</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataSort={true} dataField='phone' dataAlign="center" tdStyle={{ whiteSpace: 'normal' }} >Ph</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataSort={true} dataField='email' dataAlign="center" tdStyle={{ whiteSpace: 'normal' }} >Email</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataSort={true} dataField='is_premium' dataAlign="center" dataFormat={this.checkboxCell} >Premium User  </TableHeaderColumn>
                                <TableHeaderColumn width='100' dataSort={true}dataField='premium_expiry_timestamp' dataAlign="center" tdStyle={{ whiteSpace: 'normal' }} >Premium Expiry Date</TableHeaderColumn>
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
        users: state.UserReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllUser: () => dispatch(resourceActions.fetchAllUser()),
        updateUserPremium: (user) => dispatch(resourceActions.updateUserPremium(user)),
        deleteUser: (username) => dispatch(resourceActions.deleteUser(username))
    };
};

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(User);
export { connectedApp as User };