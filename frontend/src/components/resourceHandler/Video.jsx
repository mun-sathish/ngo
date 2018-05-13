import React from "react";
import { connect } from 'react-redux';

class Video extends React.Component {

    render() {
        return (
                <div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Video);