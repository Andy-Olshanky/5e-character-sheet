import React from 'react'
import Check from './Check'

function Skills() {
  return (
    <div className="skills">
      <div id="group">
        <Check ability="Acrobatics (DEX)" id="acrobaticsCheck" />
        <Check ability="Animal Handling (WIS)" id="animalHandlingCheck" />
        <Check ability="Arcana (INT)" id="arcanaCheck" />
        <Check ability="Athletics (STR)" id="athleticsCheck" />
        <Check ability="Deception (CHA)" id="deceptionCheck" />
        <Check ability="History (INT)" id="historyCheck" />
        <Check ability="Insight (WIS)" id="insightCheck" />
        <Check ability="Intimidation (CHA)" id="intimidationCheck" />
        <Check ability="Investigation (INT)" id="investigationCheck" />
        <Check ability="Medicine (WIS)" id="medicineCheck" />
        <Check ability="Nature (INT)" id="natureCheck" />
        <Check ability="Perception (WIS)" id="perceptionCheck" />
        <Check ability="Performance (CHA)" id="performanceCheck" />
        <Check ability="Persuassion (CHA)" id="persuassionCheck" />
        <Check ability="Religion (INT)" id="religionCheck" />
        <Check ability="Sleight of Hand (DEX)" id="sleightOfHandCheck" />
        <Check ability="Stealth (DEX)" id="stealthCheck" />
        <Check ability="Survival (WIS)" id="survivalCheck" />
        <strong>Skill Checks</strong>
      </div>
    </div>
  )
}

export default Skills