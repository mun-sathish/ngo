import React from "react";

export default class VideoRow extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            video_id : this.props.data.video_id,
            title: null,
            author: null,
            genre: null,
            cast: null,
            price: null,
            discount: null,
            is_premium: null, //boolean
            is_free: null, //boolean
            banner: null,
            file: null,
        }
    }

    componentDidMount(){
        console.log("Inside VideoRow")
        console.log(this.props.data)
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
        reader.onload = function () {
            var fileContent = reader.result;
            if (allowedFormat.indexOf(temp) === -1)
                alert("Select Image of Mp4 ")
            else {
                me.setState({ file: fileContent })
                me.props.changeVideoSrc(fileContent, "file")
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
                me.setState({ banner: fileContent })
                me.props.changeVideoSrc(fileContent, "banner")
            }
        }
    }


    handleUpdateClick = (e) => { this.props.handleVideoRowClick(this.state, "update") }
    handleDeleteClick = (e) => { this.props.handleVideoRowClick(this.state, "delete") }

    render() {
        return (
            <tr key={this.props.data.video_id}>
                <td><input type="text" defaultValue={this.props.data.title} onChange={this.changeTitle} placeholder="Title" /></td>
                <td><input type="text" defaultValue={this.props.data.author} onChange={this.changeAuthor} placeholder="Author" /></td>
                <td><input type="text" defaultValue={this.props.data.genre} onChange={this.changeGenre} placeholder="Genre" /></td>
                <td><input type="text" defaultValue={this.props.data.cast} onChange={this.changeCast} placeholder="Cast" /></td>
                <td><input type="number" defaultValue={this.props.data.price} onChange={this.changePrice} placeholder="Price" /></td>
                <td><input type="number" defaultValue={this.props.data.discount} onChange={this.changeDiscount} placeholder="Discount" /></td>
                <td><input type="checkbox" defaultChecked={parseInt(this.props.data.is_premium,10)} onChange={this.changeIsPremium} placeholder="IsPremium" /></td>
                <td><input type="checkbox" defaultChecked={parseInt(this.props.data.is_free, 10)} onChange={this.changeIsFree} placeholder="IsFree" /></td>
                <td><video height="50" controls="true" src={this.props.data.video_src}></video><br /></td>
                <td><img src={this.props.data.banner} alt="img" height="50px" /></td>
                <td><input width="20px" type="file" onChange={(e) => this.changeFile(e.target.files[0])} /></td>
                <td><input type="file" onChange={(e) => this.changeBanner(e.target.files[0])} /></td>
                <td><input type="submit" value="Update" onClick={this.handleUpdateClick} /></td>
                <td><input type="submit" value="Delete" onClick={this.handleDeleteClick} /></td>
            </tr>
        )
    }
}