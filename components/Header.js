import React from 'react'
import Image from './Image'
import Lines from './Lines'
import Grid from './Grid'
import Name from './Name'

function Header() {
  return (
    <div className="heading">
        <Image/>
        <Name />
        <Grid labels={["Class", "Level", "Race", "Alignment", "Background", "XP"]}/>
    </div>
  )
}

export default Header