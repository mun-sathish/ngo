import React from "react";
import { connect } from 'react-redux';
import { resourceActions } from '../../../action'
import { Jumbotron, FormGroup, ControlLabel, FormControl, Grid, Row, Col, Image, Button, Checkbox } from 'react-bootstrap'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import { BLOB_URI, REQ } from '../../../util/Constant'
import naImage from '../../../raw/na-image.jpg'
import { CustomNavbar } from "../../CustomNavBar";
import './task.css'

class Task extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            file_src: [
                <Image src={naImage} height="200px" />,
            ]
        }
    }

    componentDidMount() {
        this.props.fetchAllTask();
    }



    changeFile = (filesVar) => {
        let allowedFormat = ["png", "jpg", "jpeg"]
        let me = this
        let fileHTMLContent = [];
        for (let i = 0; i < filesVar.length; i++) {
            let fileVar = filesVar[i];
            let temp = fileVar.name.split(".").pop().toLowerCase()
            if (allowedFormat.indexOf(temp) === -1)
                alert(fileVar.name + ": Invalid Format")
            else {
                fileHTMLContent.push(<Image src={URL.createObjectURL(fileVar)} width="200px" />)
            }
        }
        me.setState({ file_src: fileHTMLContent })
    }

    handleClick = (obj) => {
        this.props.deleteTask({ task_id: obj.task_id, file: obj.file });
    }

    checkboxCell = (cell, row) => {
        if (cell === '1')
            return (<Checkbox checked={true} ></Checkbox>)
        else
            return (<Checkbox checked={false} ></Checkbox>)

    }

    textCell = (cell, row) => {
        console.log(row);
        let me = this
        return <div>{cell.substring(0, 50)}...<a onClick={() => {
            console.log("onclicked")
            me.setState({ overlay: cell, overlayDisplay: "block" });
        }}> (Read more)</a></div>;

    }

    imageCell = (cell, row) => {
        let fileNames = cell.split(",");

        let imageHTMLContent = fileNames.map(item => {
            return <div><a href={BLOB_URI.TASK_FILE + item}>{item}</a><br /></div>
            // return <Image src={BLOB_URI.TASK_FILE + item} width="150" />
        })
        imageHTMLContent = <div>{imageHTMLContent}</div>;
        return imageHTMLContent;
    }

    deleteCell = (cell, row) => {
        return (
            <Button bsStyle="danger" onClick={() => this.handleClick(row)}>Delete</Button>
        )
    }

    overlayOff = (e) => {
        this.setState({ overlay: "", overlayDisplay: "none" });
    }

    render() {
        return (
            <div>
                <div id="overlay" style={{ display: this.state.overlayDisplay }} onClick={this.overlayOff}>
                    <div id="overlay-text">{this.state.overlay}</div>
                </div>
                <CustomNavbar />
                <Grid>
                    <Row>
                        <Col xs={12} md={6}>
                            <form method={REQ.TASK_ADD.METHOD} action={REQ.TASK_ADD.URI} enctype={REQ.TASK_ADD.enctype}>

                                <FormGroup>
                                    <Col xs={12} md={6}>
                                        <ControlLabel>Title</ControlLabel>
                                        <FormControl
                                            type="text"
                                            name="title"
                                            placeholder="Enter Title"
                                        />
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <ControlLabel>Description</ControlLabel>
                                        <FormControl
                                            type="text"
                                            componentClass="textarea"
                                            name="description"
                                            placeholder="Enter Description"
                                        />
                                    </Col>
                                    <Col xs={12} md={6} >
                                        <Col>
                                            <ControlLabel>Images (Jpg, Jpeg, Png)</ControlLabel>
                                        </Col>
                                        <Col>
                                            <FormControl
                                                id="file"
                                                type="file"
                                                name="file[]"
                                                multiple="mutiple"
                                                accept="image/jpeg, image/png, image/jpg"
                                                onChange={(e) => this.changeFile(e.target.files)}
                                            />
                                        </Col>
                                    </Col>
                                    <Col xs={12} md={6}  >
                                        <Col>
                                            <ControlLabel>Is Premium?
                                            <FormControl
                                                    type="checkbox"
                                                    name="is_premium"
                                                    value="1"
                                                />
                                            </ControlLabel>
                                        </Col>

                                    </Col>
                                    <Col xs={12}>
                                        <Button type="submit" bsStyle="primary">Submit</Button>
                                    </Col>
                                </FormGroup>

                            </form>
                        </Col>

                        <Col xs={12} md={6} style={{ padding: 20 }} className="show-grid text-center">
                            <Row>
                                <Col xs={12}>
                                    {this.state.file_src}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <hr />
                    <Row className="show-grid text-center">
                        <Col xs={12}>
                        </Col>
                    </Row>
                </Grid>

                <Grid>
                    <Row>
                        <Jumbotron>
                            <h1><center><bold>Resource:</bold> Task Data</center></h1>
                        </Jumbotron>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <BootstrapTable data={this.props.task} stripped hover condensed options={{ noDataText: 'There is no data to display' }} pagination search>
                                <TableHeaderColumn width='100' dataAlign="center" dataFormat={this.deleteCell} />
                                <TableHeaderColumn width='100' dataField='task_id' isKey hidden>ID</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataSort dataField='title' dataAlign="center" tdStyle={{ whiteSpace: 'normal' }} >Title</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataSort dataField='description' dataAlign="center" tdStyle={{ whiteSpace: 'normal' }} dataFormat={this.textCell} >Description</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataSort dataField='is_premium' dataAlign="center" dataFormat={this.checkboxCell} >Is Premium?  </TableHeaderColumn>
                                <TableHeaderColumn width='150' dataField='file' dataAlign="center" dataFormat={this.imageCell}  >Images </TableHeaderColumn>

                            </BootstrapTable>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        task: state.TaskReducer,
        users: state.UserLoginReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTask: (id) => dispatch(resourceActions.deleteTask(id)),
        fetchAllTask: () => dispatch(resourceActions.fetchAllTask())
    };
};

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(Task);
export { connectedApp as Task };