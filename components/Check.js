import React from 'react'
import { createElement } from 'react'
import CycleImage from './CycleImage'
import Lines from './Lines'

function Check() {

  var thing = new CycleImage({images: [
            "notProficient.png", 
            "halfProficient.png",
            "proficient.png",
            "expert.png"
        ]}).render()

  var lineJawn = <Lines description={""} />

  var modifier = <div>mod</div>

  var children = [thing, lineJawn, modifier]

  // proficiency checkbox, skill name, modifier
  return createElement("div", {className: "check"}, children)
}

export default Check