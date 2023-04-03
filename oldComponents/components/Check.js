import React from 'react'
import {createElement} from 'react'
import CycleImage from './CycleImage'

function Check({ability, profId, nameId}) {

    var thing = new CycleImage({
        images: [
            "notProficient.png", "halfProficient.png", "proficient.png", "expert.png"
        ],
        id: profId
    }).render()

    var lineJawn = <div id="ability">
        {ability}</div>

    var modifier = <div id={nameId}>0</div>

    var children = [thing, modifier, lineJawn]

    // proficiency checkbox, skill name, modifier
    return createElement("div", {
        className: "check"
    }, children)
}

export default Check
