import React from 'react'
import AbilityScore from './AbilityScore'

function Abilities() {
  return (
    <div className="abilities">
        <AbilityScore name="Strength" inputValue="10" idName="strengthValue" />
        <AbilityScore name="Dexterity" inputValue="11" idName="dexterityValue" />
        <AbilityScore name="Constitution" inputValue="7" idName="constitutionValue" />
        <AbilityScore name="Intelligence" inputValue="9" idName="intelligenceValue" />
        <AbilityScore name="Wisdom" inputValue="18" idName="wisdomValue" />
        <AbilityScore name="Charisma" inputValue="16" idName="charismaValue" />
    </div>
  )
}

export default Abilities