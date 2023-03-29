import React from 'react'
import AbilityScore from './AbilityScore'

function Abilities() {
  return (
    <div className="abilities">
        <AbilityScore name="Strength" inputValue="10" />
        <AbilityScore name="Dexterity" inputValue="11" />
        <AbilityScore name="Constitution" inputValue="7" />
        <AbilityScore name="Intelligence" inputValue="9" />
        <AbilityScore name="Wisdom" inputValue="18" />
        <AbilityScore name="Charisma" inputValue="16" />
    </div>
  )
}

export default Abilities