import React from "react";
import { connect } from 'react-redux';
import { addBook, fetchAllBooks } from '../../action/resource_action'

class Book extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "",
            author: "",
            isbn: "",
            publisher: "",
            edition: "",
            edition_number: "",
            no_of_pages: "",
            binding: "",
            flipkart_link: "",
            amazon_link: "",
            banner: "",

            src: ""
        }
    }

    componentDidMount() {
        this.props.fetchAllBooks();
    }

    changeName = (e) => this.setState({ name: e.target.value })
    changeAuthor = (e) => this.setState({ author: e.target.value })
    changeIsbn = (e) => this.setState({ isbn: e.target.value })
    changePublisher = (e) => this.setState({ publisher: e.target.value })
    changeEdition = (e) => this.setState({ edition: e.target.value })
    changeEditionNumber = (e) => this.setState({ edition_number: e.target.value })
    changeNoOfPages = (e) => this.setState({ no_of_pages: e.target.value })
    changeBinding = (e) => this.setState({ binding: e.target.value })
    changeFlipkartLink = (e) => this.setState({ flipkart_link: e.target.value })
    changeAmazonLink = (e) => this.setState({ amazon_link: e.target.value })
    changeBanner = (e) => {
        let temp = e.target.value.split(".").pop().toLowerCase()
        let allowedFormat = ["png", "jpg", "jpeg"]

        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        let me = this
        // me.setState({ src: URL.createObjectURL(e.target.files[0]) })
        reader.onload = function () {
            var fileContent = reader.result;

            if (allowedFormat.indexOf(temp) === -1)
                alert("Select Image of Jpeg, Png, Jpg ")
            else {
                me.setState({ src: fileContent })
                me.setState({ banner: fileContent })
            }
        }

    }

    handleClick = (e) => {
        let tempState = this.state
        for (const key of Object.keys(tempState)) {
            if (typeof tempState[key] === "string")
                if (tempState[key].length === 0)
                    tempState[key] = "_blank"
        }
        this.props.addBook(this.state);
    }

    render() {
        let books = this.props.books.map(item => {
            return (
                <tr key={item.book_id}>
                    <td>{item.name}</td>
                    <td>{item.author}</td>
                    <td>{item.isbn}</td>
                    <td>{item.publisher}</td>
                    <td>{item.edition}</td>
                    <td>{item.edition_number}</td>
                    <td>{item.no_of_pages}</td>
                    <td>{item.binding}</td>
                    <td>{item.flipkart_link}</td>
                    <td>{item.amazon_link}</td>
                    <td><img src={item.banner} alt="err" height="100px" /></td>
                </tr>
            )
        })
        return (
            <div>
                Name: <input type="text" defaultValue={this.state.name} onChange={this.changeName} placeholder="Name" /><br />
                Author: <input type="text" defaultValue={this.state.author} onChange={this.changeAuthor} placeholder="Author" /><br />
                Isbn: <input type="text" defaultValue={this.state.isbn} onChange={this.changeIsbn} placeholder="Isbn" /><br />
                Publisher: <input type="text" defaultValue={this.state.publisher} onChange={this.changePublisher} placeholder="Publisher" /><br />
                Edition: <input type="text" defaultValue={this.state.edition} onChange={this.changeEdition} placeholder="Edition" /><br />
                Edition Number: <input type="text" defaultValue={this.edition_number} onChange={this.changeEditionNumber} placeholder="Edition Number" /><br />
                No of pages: <input type="text" defaultValue={this.state.no_of_pages} onChange={this.changeNoOfPages} placeholder="no_of_pages" /><br />
                Binding: <input type="text" defaultValue={this.state.binding} onChange={this.changeBinding} placeholder="Binding" /><br />
                Flipkart Link: <input type="text" defaultValue={this.state.flipkart_link} onChange={this.changeFlipkartLink} placeholder="flipkart_link" /><br />
                Amazon Link: <input type="text" defaultValue={this.state.amazon_link} onChange={this.changeAmazonLink} placeholder="amazon_link" /><br />
                Banner: <input type="file" defaultValue={this.state.banner} onChange={this.changeBanner} placeholder="Banner" /><br />
                <input type="submit" value="Add Book" onClick={this.handleClick} /><br />

                <img src={this.state.src} alt="test" height="100px" />
                <hr />

                <h1>OUTPUT:</h1>
                <table border="2">
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>author</th>
                            <th>isbn</th>
                            <th>publisher</th>
                            <th>edition</th>
                            <th>edition_number</th>
                            <th>no_of_pages</th>
                            <th>binding</th>
                            <th>flipkart_link</th>
                            <th>amazon_link</th>
                            <th>banner</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books}
                    </tbody>

                </table>

            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        books: state.booksReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addBook: (book) => dispatch(addBook(book)),
        fetchAllBooks: () => dispatch(fetchAllBooks())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);