import React from 'react'

function AbilityScore({name, inputValue}) {
  return (
    <div className="score">
        <div id="name">{name}</div>
        <input type="number" value={inputValue} />
        <div id="abilityMod">+1</div>
    </div>
  )
}

export default AbilityScore