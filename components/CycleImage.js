import React from "react";

class CycleImage extends React.Component {
    constructor(props) {
        super(props)
        this.images = props.images
        this.ptr = 0;
    }

    handleClick = () => {
        if (this.images != null && this.images.length > 0) {
            this.ptr = (this.ptr + 1) % this.images.length
            var div = document.getElementById("photo")
            div.setAttribute("src", this.images[this.ptr])
        }
    }

    render() {
        return (
            <div className="inside" onClick={this.handleClick}>
                <img id="photo" src={this.images[this.ptr]} alt="No Image Found" />
            </div>
        )
    }
}

export default CycleImage