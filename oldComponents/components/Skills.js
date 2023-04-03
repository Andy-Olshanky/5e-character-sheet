import React from 'react'
import Check from './Check'

function Skills() {
  return (
    <div className="skills">
      <div id="group">
        <Check ability="Acrobatics (DEX)" profId="acrobaticsCheckProf" nameId="acrobaticsCheckMod" />
        <Check ability="Animal Handling (WIS)" profId="animalHandlingCheckProf" nameId="animalHandlingCheckMod" />
        <Check ability="Arcana (INT)" profId="arcanaCheckProf" nameId="arcanaCheckMod" />
        <Check ability="Athletics (STR)" profId="athleticsCheckProf" nameId="athleticsCheckMod" />
        <Check ability="Deception (CHA)" profId="deceptionCheckProf" nameId="deceptionCheckMod" />
        <Check ability="History (INT)" profId="historyCheckProf" nameId="historyCheckMod" />
        <Check ability="Insight (WIS)" profId="insightCheckProf" nameId="insightCheckMod" />
        <Check ability="IntimprofIdation (CHA)" profId="intimidationCheckProf" nameId="intimidationCheckMod" />
        <Check ability="Investigation (INT)" profId="investigationCheckProf" nameId="investigationCheckMod" />
        <Check ability="Medicine (WIS)" profId="medicineCheckProf" nameId="medicineCheckMod" />
        <Check ability="Nature (INT)" profId="natureCheckProf" nameId="natureCheckMod" />
        <Check ability="Perception (WIS)" profId="perceptionCheckProf" nameId="perceptionCheckMod" />
        <Check ability="Performance (CHA)" profId="performanceCheckProf" nameId="performanceCheckMod" />
        <Check ability="Persuassion (CHA)" profId="persuassionCheckProf" nameId="persuassionCheckMod" />
        <Check ability="Religion (INT)" profId="religionCheckProf" nameId="religionCheckMod" />
        <Check ability="Sleight of Hand (DEX)" profId="sleightOfHandCheckProf" nameId="sleightOfHandCheckMod" />
        <Check ability="Stealth (DEX)" profId="stealthCheckProf" nameId="stealthCheckMod" />
        <Check ability="Survival (WIS)" profId="survivalCheckProf" nameId="survivalCheckMod" />
        <strong>Skill Checks</strong>
      </div>
    </div>
  )
}

export default Skills