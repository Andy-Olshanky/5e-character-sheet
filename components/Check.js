import React from 'react'
import CheckBox from './CheckBox'

function Check() {
  return (
    <div className="check">
        <CheckBox images={[
            "expert.png",
            "notProficient.png", 
            "halfProficient.png",
            "proficient.png"
        ]}/>
    </div>
  )
}

export default Check