import React from "react";
import { connect } from 'react-redux';
import { fetchSecurityQuestion, addSQ, updateSQ, deleteSQ } from '../action/security_question_action'

class SecurityQuestion extends React.Component {

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
        this.props.deleteSQ(sid)
    }

    handleUpdateClick = (sid) => {
        // this.props.updateSQ(sid);
    }

    componentDidMount() {
        this.props.fetchSecurityQuestion()
    }

    render() {
        let sq = this.props.sq.map(item => {
            return (
                <tr key={item.security_question_id}>
                    <td>{item.security_question_id}</td>
                    <td>{item.question}</td>
                    <td><input type="button" value="Delete" onClick={() => this.handleDeleteClick(item.security_question_id)} /></td>
                    <td>< input type="button" value="Update" onClick={() => this.handleUpdateClick(item.security_question_id)} /></td>
                </tr>
            )
        })














        return (
            <div>
                <h1>ADD</h1>
                <input defaultValue={this.state.question} onChange={this.handleQuestion} type="text" placeholder="Secuirty Question" />
                <input type="submit" value="Add" onClick={this.handleAddClick} />
                <hr />
                <h1>OUTPUT:</h1> <br />
                <table >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Question</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sq}
                    </tbody>

                </table>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        sq: state.securityQuestionReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSecurityQuestion: () => dispatch(fetchSecurityQuestion()),
        addSQ: (question) => dispatch(addSQ(question)),
        updateSQ: (sid) => dispatch(updateSQ(sid)),
        deleteSQ: (sid) => dispatch(deleteSQ(sid))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SecurityQuestion);