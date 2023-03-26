import React from 'react'
import { createElement } from 'react'
import CycleImage from './CycleImage'

function Check({ability}) {

  var thing = new CycleImage({images: [
            "notProficient.png", 
            "halfProficient.png",
            "proficient.png",
            "expert.png"
        ]}).render()

  var lineJawn = <div>{ability}</div>

  var modifier = <div>modifier</div>

  var children = [thing, lineJawn, modifier]

  // proficiency checkbox, skill name, modifier
  return createElement("div", {className: "check"}, children)
}

export default Check