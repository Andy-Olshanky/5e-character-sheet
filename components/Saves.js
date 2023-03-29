import React from 'react'
import Check from './Check'

function Saves() {
  return (
    <div className="saves">
      <div id="group">
        <Check ability="Strength" id="strengthSave" />
        <Check ability="Dexterity" id="dexteritySave" />
        <Check ability="Constitution" id="constitutionSave" />
        <Check ability="Intelligence" id="intelligenceSave" />
        <Check ability="Wisdom" id="wisdomSave" />
        <Check ability="Charisma" id="charismaSave" />
        <strong>Saving Throws</strong>
      </div>
    </div>
  )
}

export default Saves