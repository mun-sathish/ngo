import React from "react";
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Book from './resourceHandler/Book.jsx'
import Video from './resourceHandler/Video.jsx'
import Audio from './resourceHandler/Audio.jsx'
import SecurityQuestion from './SecurityQuestion.jsx'
import ResourceHome from './resourceHandler/ResourceHome.jsx'
import CustomNavbar from './CustomNavBar.jsx'

class ResourceManager extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <CustomNavbar />
                    <Route exact path="/resource/home" component={ResourceHome} />
                    <Route exact path="/resource/book" component={Book} />
                    <Route path="/resource/audio" component={Audio} />
                    <Route path="/resource/video" component={Video} />
                    <Route path="/security-question" component={SecurityQuestion} />
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