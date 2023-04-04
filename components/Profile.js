import React, {Component} from 'react'

export class Profile extends Component {

    constructor(props) {
        super(props)
        this.image = props.image != null ? props.image : ""
    }

    handleClick = (event) => {
        console.log("handling click")
        var file = event.target.files
        var data = new FormData();
        data.append("file", file)
    }

    render() {
        return (
            <form onClick={this.handleClick}>
                <img src={this.image} alt="CLICK ME" />
            </form>
        )
    }
}

export default Profile
