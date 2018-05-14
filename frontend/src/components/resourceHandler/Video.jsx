import React from "react";
import { connect } from 'react-redux';
import { addVideo, fetchAllVideo } from '../../action/resource_action'

class Video extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            title: "",
            author: "",
            genre: "",
            cast: "",
            price: -1,
            discount: -1,
            is_premium: 0, //boolean
            is_free: 0, //boolean
            banner: "",
            file: "",

            banner_src: "",
            video_src: ""
        }
    }

    componentDidMount() {
        this.props.fetchAllVideo();
    }

    changeTitle = (e) => this.setState({ title: e.target.value })
    changeAuthor = (e) => this.setState({ author: e.target.value })
    changeGenre = (e) => this.setState({ genre: e.target.value })
    changeCast = (e) => this.setState({ cast: e.target.value })
    changePrice = (e) => this.setState({ price: parseInt(e.target.value, 10) })
    changeDiscount = (e) => this.setState({ discount: parseInt(e.target.value, 10) })
    changeIsPremium = (e) => this.setState({ is_premium: e.target.checked })
    changeIsFree = (e) => this.setState({ is_free: e.target.checked })
    changeFile = (fileVar) => {
        let temp = fileVar.name.split(".").pop().toLowerCase()
        let allowedFormat = ["mp4"]

        let reader = new FileReader();
        reader.readAsDataURL(fileVar);
        let me = this
        // me.setState({ src: URL.createObjectURL(e.target.files[0]) })
        reader.onload = function () {
            var fileContent = reader.result;
            if (allowedFormat.indexOf(temp) === -1)
                alert("Select Image of Mp3 ")
            else {
                me.setState({ audio_src: fileContent })
                me.setState({ file: fileContent })
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
        this.props.addVideo(this.state);
    }

    render() {
        let video = this.props.video.map(item => {
            return (
                <tr key={item.video_id}>
                    <td>{item.title}</td>
                    <td>{item.author}</td>
                    <td>{item.genre}</td>
                    <td>{item.cast}</td>
                    <td>{item.price}</td>
                    <td>{item.discount}</td>
                    <td>{String(item.is_premium)}</td>
                    <td>{String(item.is_free)}</td>
                    <td><img src={item.banner} alt="img" height="100px" /></td>
                    <td> <video controls="true" src={item.file}></video></td>
                </tr>
            )
        })
        return (
            <div>
                {JSON.stringify(this.state)}<br/>
                Title: <input type="text" defaultValue={this.state.title} onChange={this.changeTitle} placeholder="Title" /><br />
                Author: <input type="text" defaultValue={this.state.author} onChange={this.changeAuthor} placeholder="Author" /><br />
                Genre: <input type="text" defaultValue={this.state.genre} onChange={this.changeGenre} placeholder="Genre" /><br />
                Cast: <input type="text" defaultValue={this.state.cast} onChange={this.changeCast} placeholder="Cast" /><br />
                Price: <input type="number" defaultValue={this.state.price} onChange={this.changePrice} placeholder="Price" /><br />
                Discount: <input type="number" defaultValue={this.state.discount} onChange={this.changeDiscount} placeholder="Discount" /><br />
                IsPremium: <input type="checkbox" defaultChecked={this.state.is_premium} onChange={this.changeIsPremium} placeholder="IsPremium" /><br />
                IsFree: <input type="checkbox" defaultChecked={this.state.is_free} onChange={this.changeIsFree} placeholder="IsFree" /><br />
                Banner: <input type="file" onChange={(e) => this.changeBanner(e.target.files[0])} /><br />
                Video File: <input type="file" onChange={(e) => this.changeFile(e.target.files[0])} /><br />
                <input type="submit" value="Add Audio" onClick={this.handleClick} /><br />

                <video controls="true" src={this.state.audio_src}></video><br />
                <img src={this.state.banner_src} alt="img" height="100px" />
                <hr />

                <h1>OUTPUT:</h1>
                <table border="2">
                    <thead>
                        <tr>
                            <th>title</th>
                            <th>author</th>
                            <th>genre</th>
                            <th>cast</th>
                            <th>price</th>
                            <th>discount</th>
                            <th>is_premium</th>
                            <th>is_free</th>
                            <th>banner</th>
                            <th>file</th>
                        </tr>
                    </thead>
                    <tbody>
                        {video}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        video: state.videoReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addVideo: (video) => dispatch(addVideo(video)),
        fetchAllVideo: () => dispatch(fetchAllVideo())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Video);