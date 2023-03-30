import React from 'react'
import Check from './Check'

function Saves() {
  return (
    <div className="saves">
      <div id="group">
        <Check ability="Strength" profId="strengthSaveProf" nameId="strengthSaveMod" />
        <Check ability="Dexterity" profId="dexteritySaveProf" nameId="dexteritySaveMod" />
        <Check ability="Constitution" profId="constitutionSaveProf" nameId="constitutionSaveMod" />
        <Check ability="Intelligence" profId="intelligenceSaveProf" nameId="intelligenceSaveMod" />
        <Check ability="Wisdom" profId="wisdomSaveProf" nameId="wisdomSaveMod" />
        <Check ability="Charisma" profId="charismaSaveProf" nameId="charismaSaveMod" />
        <strong>Saving Throws</strong>
      </div>
    </div>
  )
}

export default Saves