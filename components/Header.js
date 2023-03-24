import React from 'react'
import Image from './Image'
import Lines from './Lines'
import Grid from './Grid'
import Name from './Name'
import Row from './Row'

function Header() {
  return (
    <div className="heading">
        <Image/>
        <Name />
        <Grid labels={["Class", "Level", "Race", "Alignment", "Background", "XP"]} />
        <Grid labels={["Age", "Height", "Weight", "Eyes", "Skin", "Hair"]} />
    </div>
  )
}

export default Header