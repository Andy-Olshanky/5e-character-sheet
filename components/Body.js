import React from 'react'
import Lines from './Lines'
import Saves from './Saves'
import Abilities from './Abilities'
import Skills from './Skills'

function Body() {
  return (
    <div className='body'>
      <div className="leftCol">
        <Saves />
        <Abilities />
        <Skills />
      </div>
      <div className="midCol">
        <Lines description={"AC"} id={"ac"} />
        <Lines description={"Initiative"} id={"initiative"} />
        <Lines description={"Proficiency"} id={"proficiency"} />
        <Lines description={"Movement Speed"} id={"moveSpeed"} />
        <Lines description={"Health"} id={"curHealth"} />
        <Lines description={"Max Health"} id={"maxHealth"} />
      </div>
      <div className="rightCol">

      </div>
    </div>
  )
}

export default Body