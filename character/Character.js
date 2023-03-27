import React from 'react'

class Abilities {
    constructor(props) {
        this.strength = new Ability(props.strengthProps)
        this.dexterity = new Ability(props.dexterityProps)
        this.constitution = new Ability(props.constitutionProps)
        this.intelligence = new Ability(props.intelligenceProps)
        this.wisdom = new Ability(props.wisdomProps)
        this.charisma = new Ability(props.charismaProps)
        this.allAbilities = [this.strength, this.dexterity, this.constitution, this.intelligence, this.wisdom, this.charisma]
    }

    getAbility = (name) => {
        for (var ability in this.allAbilities) {
            if (name == ability.name) {
                return ability
            }
        }
        return null
    }
}

class Ability {
    constructor(props) {
        this.name = props.name
        this.otherModifier = props.otherModifier != null ? props.modifier : 0
        this.score = props.score != null ? props.score + this.otherModifier : 10 + this.otherModifier
        this.checkScore()
        this.modifier = this.getModifier()
    }

    checkScore = () => {
        this.score = Math.max(1, this.score)
        this.score = Math.min(20, this.score)
    }
    
    getModifier = () => {
        var temp = this.score - 10
        temp /= 10
        return Math.floor(temp)
    }
}

class Skill {
    NOTPROFICIENT = 0
    HALFPROFICIENT = 1
    PROFICIENT = 2
    EXPERT = 3

    constructor(props) {
        this.name = props.name
        this.proficiencyMod = props.proficiencyMod
        this.parentAbility = props.parentAbility
        this.otherModifier = props.otherModifier != null ? props.otherModifier : 0
        this.modifier = this.parentAbility.modifier + this.otherModifier
        this.modifier += this.getProficiency()
    }

    getProficiency = () => {
        switch (this.proficiencyMod) {
            case(this.HALFPROFICIENT):
                return Math.floor(this.proficiency / 2)
            
            case (this.PROFICIENT):
                return this.proficiency
            
            case (this.EXPERT):
                return this.proficiency * 2
        }
        return 0
    }
}

class Save extends Skill{
    constructor(props) {
        super(props)
        this.modifier = 8 + this.parentAbility.modifier + this.getProficiency()
    }
}

class Health {
    constructor(hp) {
        this.maxHp = hp
        this.curHP = this.maxHp
        this.tempHp = 0
    }
    
    gainTempHp = (hp) => {
        this.tempHp = Math.max(this.tempHp, hp)
    }

    gainHp = (hp) => {
        this.curHP = Math.min(this.maxHp, this.curHP + hp)
    }

    raiseMaxHp = (hp) => {
        this.maxHp += hp
        this.curHP += hp
    }

    lowerMaxHp = (hp) => {
        if (hp >= this.maxHp) {
            dif = this.maxHp - 1
            this.maxHp = 1
        }
        else {
            this.maxHp -= hp
        }
        this.curHP = Math.max(0, this.curHP - hp)
    }

    takeDamage = (hp) => {
        if (this.tempHp > 0) {
            if (this.tempHp >= hp) {
                this.tempHp -= hp
            }
            else {
                this.curHP -= (hp - this.tempHp)
                this.tempHp = 0
            }
        }
        else {
            this.curHP -= hp
        }
        this.curHP = Math.max(0, this.curHP)
    }
}

export class Character {
    constructor(props) {
        this.health = new Health(props.hp)
        this.abilities = new Abilities(props.abilities)
    }
}

export default Character

// this is the props
var charProps = {
    hp: int,
    abilities: {
        strengthProps: {

        },
        dexterityProps: {

        },
        constitutionProps: {

        },
        intelligenceProps: {

        },
        wisdomProps: {

        },
        charismaProps: {

        }
    },
}