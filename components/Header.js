import React from 'react'
import Image from './Image'
import Lines from './Lines'
import Grid from './Grid'
import Name from './Name'
import Row from './Row'

function Header() {
  return (
    <div className="heading">
        <Image image={"whiskers.png"}/>
        <Name />
        <Grid labels={["Class", "Level", "Race", "Alignment", "Background", "XP"]} rows={2} cols={3} />
        <Grid labels={["Age", "Height", "Weight", "Eyes", "Skin", "Hair"]} rows={2} cols={3} />
    </div>
  )
}

export default Header