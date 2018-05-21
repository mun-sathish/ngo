import React from "react";
import { connect } from 'react-redux';
import store from '../../store/store'

class Test extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            file: ""
        }
    }

    changeFile = (fileVar) => {
        let temp = fileVar.name.split(".").pop().toLowerCase()
        let allowedFormat = ["mp3"]

        let reader = new FileReader();
        reader.readAsDataURL(fileVar);
        let me = this
        reader.onload = function () {
            var fileContent = reader.result;
            if (allowedFormat.indexOf(temp) === -1)
                alert("Select Image of Mp4 ")
            else {
                me.setState({ file: fileContent })
            }
        }
    }

    handleClick = (e) => {
        console.log("clicked")
        store.dispatch({
            type: "TEST",
            payload: this.state
        })
    }

    render() {
        return (
            <div>
                <form method="post" action="http://awakenyourselfwithinyou.org/ngo/backend/public/api/file" enctype="multipart/form-data">
                    Video File: <input type="text" name="file" /><br />
                    Video File: <input type="file" name="newfile" /><br />
                    <input type="submit" value="Add"  /><br />
                </form>
                

                <video height="100" controls="true" src={this.state.file}></video><br />

            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        // books: state.booksReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // 
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);