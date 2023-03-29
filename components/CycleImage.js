import React from "react";

class CycleImage extends React.Component {
    constructor(props) {
        super(props)
        this.images = props.images
        this.ptr = 0;
        this.id = props.id
    }

    handleClick = () => {
        if (this.images != null && this.images.length > 0) {
            this.ptr = (this.ptr + 1) % this.images.length
            var div = document.getElementById(this.id)
            div.setAttribute("src", this.images[this.ptr])
        }
    }

    render() {
        return (
            <div className="inside" onClick={this.handleClick}>
                <img className="photo" id={this.id} src={this.images[this.ptr]} alt="No Image Found" />
            </div>
        )
    }
}

export default CycleImage