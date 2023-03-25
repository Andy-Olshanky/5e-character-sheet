import React, { useState } from 'react'

function CheckBox({images}) {

    var ptr = 0;

    function incrementPtr() {
        if (images != null && images.length > 0) {
            ptr++;
            ptr %= images.length;
        }
        console.log(ptr);
    }

    return (
        <>
            <div className="checkBox" >
                <div onClick={incrementPtr} className="inside">
                    <img id="photo" src={images[ptr]} alt="No Image found" />
                </div>
            </div>
        </>
    )
}

export default CheckBox
