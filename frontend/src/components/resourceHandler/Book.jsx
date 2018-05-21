import React from "react";
import { connect } from 'react-redux';
import { deleteBook, fetchAllBooks } from '../../action/resource_action'
import { Jumbotron, FormGroup, ControlLabel, FormControl, Grid, Row, Col, Image, Button } from 'react-bootstrap'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import { BLOB_URI, REQ } from '../../util/constants'
import './resource.css'

class Book extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            banner_src: "/raw/na-image.jpg"
        }
    }

    componentDidMount() {
        let user = this.props.users.user;
        if(user.statusCode === null || (user.statusCode !== null && user.statusCode !== 0))
            window.location.href="/";
        this.props.fetchAllBooks();
    }

    changeBanner = (fileVar) => {
        let temp = fileVar.name.split(".").pop().toLowerCase()
        let allowedFormat = ["png", "jpg", "jpeg"]

        let reader = new FileReader();
        reader.readAsDataURL(fileVar);
        let me = this
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
        this.props.deleteBook({ book_id: obj.book_id, banner: obj.banner });
    }

    linkCell = (cell, row) => {
        return (
            <Button  bsStyle="success" target="_blank" href={cell}>Link</Button>
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

    render() {
        return (
            <div>

                <Grid>
                    <Row>
                        <Col xs={6}>
                            <form method={REQ.BOOK_ADD.METHOD} action={REQ.BOOK_ADD.URI} enctype={REQ.BOOK_ADD.enctype}>

                                <FormGroup>
                                    <Col xs={6}>
                                        <ControlLabel>Name</ControlLabel>
                                        <FormControl
                                            type="text"
                                            name="name"
                                            placeholder="Enter Name"
                                        />
                                    </Col>
                                    <Col xs={6}>
                                        <ControlLabel>Author</ControlLabel>
                                        <FormControl
                                            type="text"
                                            name="author"
                                            placeholder="Enter Author"
                                        />
                                    </Col>
                                    <Col xs={6}>
                                        <ControlLabel>ISBN</ControlLabel>
                                        <FormControl
                                            type="text"
                                            name="isbn"
                                            placeholder="Enter ISBN"
                                        />
                                    </Col>
                                    <Col xs={6}>
                                        <ControlLabel>Publisher</ControlLabel>
                                        <FormControl
                                            type="text"
                                            name="publisher"
                                            placeholder="Enter Publisher"
                                        />
                                    </Col>

                                    <Col xs={6}>
                                        <ControlLabel>Edition</ControlLabel>
                                        <FormControl
                                            type="text"
                                            name="edition"
                                            placeholder="Enter Edition"
                                        />
                                    </Col>

                                    <Col xs={6}>
                                        <ControlLabel>Edition Number</ControlLabel>
                                        <FormControl
                                            type="text"
                                            name="edition_number"
                                            placeholder="Enter Edition No"
                                        />
                                    </Col>

                                    <Col xs={6}>
                                        <ControlLabel>No of Pages</ControlLabel>
                                        <FormControl
                                            type="text"
                                            name="no_of_pages"
                                            placeholder="Enter Pages"
                                        />
                                    </Col>

                                    <Col xs={6}>
                                        <ControlLabel>Binding</ControlLabel>
                                        <FormControl
                                            type="text"
                                            name="binding"
                                            placeholder="Enter Binding"
                                        />
                                    </Col>

                                    <Col xs={6}>
                                        <ControlLabel>Flipkart Link</ControlLabel>
                                        <FormControl
                                            type="text"
                                            name="flipkart_link"
                                            placeholder="Enter Flipkart Link"
                                        />
                                    </Col>

                                    <Col xs={6}>
                                        <ControlLabel>Amazon Link</ControlLabel>
                                        <FormControl
                                            type="text"
                                            name="amazon_link"
                                            placeholder="Enter Amazon Link"
                                        />
                                    </Col>

                                    <Col xs={12}>
                                        <Col xs={12}>
                                            <ControlLabel>Banner (Jpg, Jpeg, Png)</ControlLabel>
                                        </Col>
                                        <Col xs={12}>
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
                                    <Col xs={12}>
                                        <Button type="submit" bsStyle="primary">Submit</Button>
                                    </Col>
                                </FormGroup>

                            </form>
                        </Col>

                        <Col xs={6} className="show-grid text-center">
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
                            <BootstrapTable data={this.props.books} stripped hover condensed options={{ noDataText: 'There is no data to display' }} pagination>
                                <TableHeaderColumn width='100' dataAlign="center" dataFormat={this.deleteCell} />
                                <TableHeaderColumn width='100' dataField='book_id' isKey hidden>ID</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='name' dataAlign="center" tdStyle={{ whiteSpace: 'normal' }} >Name</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='author' dataAlign="center" tdStyle={{ whiteSpace: 'normal' }}>Author</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='isbn' dataAlign="center" tdStyle={{ whiteSpace: 'normal' }}>ISBN</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='publisher' dataAlign="center" tdStyle={{ whiteSpace: 'normal' }}>Publisher</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='edition' dataAlign="center" tdStyle={{ whiteSpace: 'normal' }}>Edition</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='edition_number' dataAlign="center" tdStyle={{ whiteSpace: 'normal' }}>Edition Number</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='no_of_pages' dataAlign="center" tdStyle={{ whiteSpace: 'normal' }}>No of Pages</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='binding' dataAlign="center" tdStyle={{ whiteSpace: 'normal' }}>Binding</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='flipkart_link' dataAlign="center" dataFormat={this.linkCell} tdStyle={{ whiteSpace: 'normal' }}>Flipkart Link</TableHeaderColumn>
                                <TableHeaderColumn width='100' dataField='amazon_link' dataAlign="center" dataFormat={this.linkCell} tdStyle={{ whiteSpace: 'normal' }}>Amazon Link</TableHeaderColumn>
                                <TableHeaderColumn width='150' dataField='banner' dataAlign="center" dataFormat={this.imageCell}  >Banner </TableHeaderColumn>
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
        books: state.booksReducer,
        users: state.userLoginDetails
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteBook: (id) => dispatch(deleteBook(id)),
        fetchAllBooks: () => dispatch(fetchAllBooks())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);