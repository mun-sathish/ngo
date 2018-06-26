import React from "react";
import { connect } from 'react-redux';
import { resourceActions } from '../../../action'
import { Jumbotron, FormGroup, ControlLabel, FormControl, Grid, Row, Col, Image, Button, Checkbox } from 'react-bootstrap'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import { BLOB_URI, REQ } from '../../../util/Constant'
import naVideo from '../../../raw/na-video.jpg'
import { CustomNavbar } from "../../CustomNavBar";

class Video extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            banner_src: naVideo,
            video_src: ""
        }
    }

    componentDidMount() {
        this.props.fetchAllVideo();
    }

    changeFile = (fileVar) => {
        let temp = fileVar.name.split(".").pop().toLowerCase()
        let allowedFormat = ["mp4"]

        let reader = new FileReader();
        reader.readAsDataURL(fileVar);
        let me = this
        reader.onload = function () {
            var fileContent = reader.result;
            if (allowedFormat.indexOf(temp) === -1)
                alert("Select Video of Mp4 ")
            else {
                me.setState({ video_src: fileContent })
            }
        }
    }

    changeBanner = (fileVar) => {
        let temp = fileVar.name.split(".").pop().toLowerCase()
        let allowedFormat = ["png", "jpg", "jpeg"]

        let reader = new FileReader();
        reader.readAsDataURL(fileVar);
        let me = this
        // me.setState({ src: URL.createObjectURL(e.target.files[0]) })
        reader.onload = function () {
            var fileContent = reader.result;

            if (allowedFormat.indexOf(temp) === -1)
                alert("Select Image of Jpeg, Png, Jpg ")
            else {
                me.setState({ banner_src: fileContent })
            }
        }
    }

    handleClick = (obj) => {
        this.props.deleteVideo({ video_id: obj.video_id, file: obj.file, banner: obj.banner });
    }

    checkboxCell = (cell, row) => {
        if (cell === '1')
            return (<Checkbox checked={true} ></Checkbox>)
        else
            return (<Checkbox checked={false} ></Checkbox>)

    }

    imageCell = (cell, row) => {
        return (
            <Image src={BLOB_URI.VIDEO_BANNER + cell} width="150" />
        )
    }

    videoCell = (cell, row) => {
        return (
            <video controls="true" width="250" src={BLOB_URI.VIDEO_FILE + cell}></video>
        )
    }

    deleteCell = (cell, row) => {
        return (
            <Button bsStyle="danger" onClick={() => this.handleClick(row)}>Delete</Button>
        )
    }

    render() {
        return (
            <div>
                <CustomNavbar />
                <Grid>
                    <Row>
                        <Col xs={12} md={6}>
                            <form method={REQ.VIDEO_ADD.METHOD} action={REQ.VIDEO_ADD.URI} enctype={REQ.VIDEO_ADD.enctype}>

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
                                        <ControlLabel>Author</ControlLabel>
                                        <FormControl
                                            type="text"
                                            name="author"
                                            placeholder="Enter Author"
                                        />
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <ControlLabel>Genre</ControlLabel>
                                        <FormControl
                                            type="text"
                                            name="genre"
                                            placeholder="Enter Genre"
                                        />
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <ControlLabel>Cast</ControlLabel>
                                        <FormControl
                                            type="text"
                                            name="cast"
                                            placeholder="Enter Cast"
                                        />
                                    </Col>

                                    <Col xs={12} md={4}>
                                        <Col>
                                            <ControlLabel>Banner (Jpg, Jpeg, Png)</ControlLabel>
                                        </Col>
                                        <Col>
                                            <FormControl
                                                id="banner"
                                                type="file"
                                                name="banner"
                                                accept="image/jpeg, image/png, image/jpg"
                                                className="inputfile"
                                                onChange={(e) => this.changeBanner(e.target.files[0])}
                                            />
                                            <label for="banner"><strong>Choose a file</strong></label>
                                        </Col>
                                    </Col>
                                    <Col xs={12} md={4}>
                                        <Col>
                                            <ControlLabel>Video File (mp4)  </ControlLabel>
                                        </Col>
                                        <Col>
                                            <FormControl
                                                id="file"
                                                type="file"
                                                name="file"
                                                className="inputfile"
                                                accept="video/mp4"
                                                onChange={(e) => this.changeFile(e.target.files[0])}
                                            />
                                            <label for="file"><strong>Choose a file</strong></label>
                                        </Col>
                                    </Col>
                                    <Col xs={12} md={4}>

                                        <ControlLabel>Is Premium?
                                            <FormControl
                                                type="checkbox"
                                                name="is_premium"
                                                value="1"
                                            />
                                        </ControlLabel>
                                    </Col>
                                    <Col xs={12}>
                                        <Button type="submit" bsStyle="primary">Submit</Button>
                                    </Col>
                                </FormGroup>

                            </form>
                        </Col>

                        <Col xs={12} md={6}  className="show-grid text-center">
                            <Row>
                                <Col  style={{ padding: 20 }}>
                                    <Image src={this.state.banner_src} height="200px" />
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{ padding: 20 }}>
                                    <video controls="true" src={this.state.video_src}></video>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <hr />
                </Grid>

                <Grid>
                    <Row>
                        <Jumbotron>
                            <h1><center><bold>Resource:</bold> All Video Data</center></h1>
                        </Jumbotron>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <BootstrapTable data={this.props.video} stripped hover condensed options={{ noDataText: 'There is no data to display' }} pagination>
                                <TableHeaderColumn width='100' dataAlign="center" dataFormat={this.deleteCell} />
                                <TableHeaderColumn width='100' dataField='video_id' isKey hidden>ID</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='title' dataAlign="center" tdStyle={{ whiteSpace: 'normal' }} >Title</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='author' dataAlign="center" tdStyle={{ whiteSpace: 'normal' }}>Author</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='genre' dataAlign="center" tdStyle={{ whiteSpace: 'normal' }}>Genre</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='cast' dataAlign="center" tdStyle={{ whiteSpace: 'normal' }}>Speaker</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='is_premium' dataAlign="center" dataFormat={this.checkboxCell} >Is Premium?  </TableHeaderColumn>
                                <TableHeaderColumn width='150' dataField='banner' dataAlign="center" dataFormat={this.imageCell}  >Banner </TableHeaderColumn>
                                <TableHeaderColumn width='350' dataField='file' dataAlign="center" dataFormat={this.videoCell} >Video</TableHeaderColumn>

                            </BootstrapTable>
                        </Col>
                    </Row>
                </Grid>
            </div >
        )
    }
}


const mapStateToProps = (state) => {
    return {
        video: state.VideoReducer,
        users: state.UserLoginReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllVideo: () => dispatch(resourceActions.fetchAllVideo()),
        deleteVideo: (id) => dispatch(resourceActions.deleteVideo(id)),
    };
};

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(Video);
export { connectedApp as Video };