import React from 'react'

function AbilityScore({name, inputValue, idName}) {
  return (
    <div className="score">
        <div id="name">{name}</div>
        <input id={idName} type="number" value={inputValue} />
        <div id="abilityMod">0</div>
    </div>
  )
}

export default AbilityScore