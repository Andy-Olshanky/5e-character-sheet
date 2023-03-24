import React, { createElement } from 'react'

function Row({lines}) {
  return (
    createElement("div", {className: "gridRow"}, lines)
  )
}

export default Row