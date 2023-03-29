import React from 'react'
import Check from './Check'
import Saves from './Saves'
import Abilities from './Abilities'
import Skills from './Skills'

function Body() {
  return (
    <div className='body'>
        <Saves />
        <Abilities />
        <Skills />
    </div>
  )
}

export default Body