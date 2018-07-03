import React from "react";
import { connect } from 'react-redux';
import { resourceActions } from '../../../action'
import { Jumbotron, FormGroup, ControlLabel, FormControl, Grid, Row, Col, Image, Button } from 'react-bootstrap'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import { BLOB_URI, REQ } from '../../../util/Constant'
import naImage from '../../../raw/na-image.jpg'
import { CustomNavbar } from "../../CustomNavBar";

class Book extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            banner_src: naImage
        }
    }

    componentDidMount() {
        this.props.fetchAllBooks();
    }

    changeBanner = (fileVar) => {
        let temp = fileVar.name.split(".").pop().toLowerCase()
        let allowedFormat = ["png", "jpg", "jpeg"]
        if (allowedFormat.indexOf(temp) === -1)
            alert("Select Image of Jpeg, Png, Jpg ")
        else {
            this.setState({ banner_src: URL.createObjectURL(fileVar) })
        }
    }

    changeFile = (fileVar) => {
        let temp = fileVar.name.split(".").pop().toLowerCase()
        let allowedFormat = ["pdf"]
        if (allowedFormat.indexOf(temp) === -1)
            alert("Select a PDF document ")
    }


    handleClick = (obj) => {
        this.props.deleteBook({ book_id: obj.book_id, banner: obj.banner, file: obj.file });
    }

    linkCell = (cell, row) => {
        return (
            <Button bsStyle="success" target="_blank" href={cell}>Link</Button>
        )
    }

    deleteCell = (cell, row) => {
        return (
            <Button bsStyle="danger" onClick={() => this.handleClick(row)}>Delete</Button>
        )
    }

    imageCell = (cell, row) => {
        return (
            <Image src={BLOB_URI.BOOK_BANNER + cell} height="100" />
        )
    }

    pdfCell = (cell, row) => {
        return (
            <a target="_blank" href={BLOB_URI.BOOK_FILE + cell}>{cell}</a>
        )
    }

    render() {
        return (
            <div>
                <CustomNavbar />
                <Grid>
                    <Row>
                        <Col xs={12} md={6}>
                            <form method={REQ.BOOK_ADD.METHOD} action={REQ.BOOK_ADD.URI} enctype={REQ.BOOK_ADD.enctype}>

                                <FormGroup>
                                    <Col xs={12} md={6}>
                                        <ControlLabel>Name</ControlLabel>
                                        <FormControl
                                            type="text"
                                            name="name"
                                            placeholder="Enter Name"
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
                                        <ControlLabel>No of Pages</ControlLabel>
                                        <FormControl
                                            type="text"
                                            name="no_of_pages"
                                            placeholder="Enter Pages"
                                        />
                                    </Col>

                                    <Col xs={12} md={6}>
                                        <Col>
                                            <ControlLabel>Banner (Jpg, Jpeg, Png)</ControlLabel>
                                        </Col>
                                        <Col>
                                            <FormControl
                                                id="banner"
                                                type="file"
                                                name="banner"
                                                accept="image/jpeg, image/png, image/jpg"
                                                onChange={(e) => this.changeBanner(e.target.files[0])}
                                            />
                                        </Col>
                                    </Col>

                                    <Col xs={12} md={6}>
                                        <Col>
                                            <ControlLabel>PDF Document</ControlLabel>
                                        </Col>
                                        <Col>
                                            <FormControl
                                                id="file"
                                                type="file"
                                                name="file"
                                                accept="application/pdf"
                                                onChange={(e) => this.changeFile(e.target.files[0])}
                                            />
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
                                    <Image src={this.state.banner_src} height="200px" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <hr />
                </Grid>

                <hr />

                <Grid>
                    <Row>
                        <Jumbotron>
                            <h1><center><bold>Resource:</bold> All Book Data</center></h1>
                        </Jumbotron>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <BootstrapTable data={this.props.books} stripped hover condensed options={{ noDataText: 'There is no data to display' }} pagination search>
                                <TableHeaderColumn width='100' dataAlign="center" dataFormat={this.deleteCell} />
                                <TableHeaderColumn width='100' dataField='book_id' isKey hidden>ID</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataSort dataField='name' dataAlign="center" tdStyle={{ whiteSpace: 'normal' }} >Name</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataSort dataField='author' dataAlign="center" tdStyle={{ whiteSpace: 'normal' }}>Author</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataSort dataField='genre' dataAlign="center" tdStyle={{ whiteSpace: 'normal' }}>Genre</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataSort dataField='no_of_pages' dataAlign="center" tdStyle={{ whiteSpace: 'normal' }}>No of Pages</TableHeaderColumn>
                                <TableHeaderColumn width='150' dataField='banner' dataAlign="center" dataFormat={this.imageCell}  >Banner </TableHeaderColumn>
                                <TableHeaderColumn width='150' dataField='file' dataAlign="center" dataFormat={this.pdfCell}  >PDF Link</TableHeaderColumn>
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
        books: state.BookReducer,
        users: state.UserLoginReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteBook: (id) => dispatch(resourceActions.deleteBook(id)),
        fetchAllBooks: () => dispatch(resourceActions.fetchAllBooks())
    };
};

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(Book);
export { connectedApp as Book };