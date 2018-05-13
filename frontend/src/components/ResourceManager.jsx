import React from "react";
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Book from './resourceHandler/Book.jsx'
import Video from './resourceHandler/Video.jsx'
import Audio from './resourceHandler/Audio.jsx'

class ResourceManager extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <h1>Resource Manager</h1>
                    <Link to="/resource/book">Book</Link> | <Link to="/resource/audio">Audio</Link> | <Link to="/resource/video">Video</Link>
                    <hr />
                    <Route exact path="/resource/book" component={Book} />
                    <Route path="/resource/audio" component={Audio} />
                    <Route path="/resource/video" component={Video} />
                    {/* <Route path='/library/list' render={(props) => (
                        <Books {...props} books={this.props.books} />
                    )} /> */}
                </div>
            </Router>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        // books: state.bookReducer.books
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // fetchBooks: () => dispatch(fetchBooksFromServer())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResourceManager);