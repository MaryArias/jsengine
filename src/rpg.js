var util = require('./utilities.js');

class POJO {
    constructor(data) {
        if (this.template) {
            for (const [key, value] of Object.entries(data)) {
                this[key] = value;
            }
        }
    }
    getProp = p => this.template[p]
    setProp = (p, v) => this.template[p] = v
}

class Item extends POJO {
    constructor(data) {
        console.log(data)
        super(data)
    }
}
class PJ extends POJO {
    constructor(data) {
        super(data);
    }
    /**
     * 
     * @returns 
     */
    getAttackValue = () =>
        util.getRandomNumberBetweenNumbers(inventary.wepon.minDamage, inventary.wepon.maxDamage)

}

class Environment extends POJO {
    constructor(data) {
        super(data);
    }
}

class Fight extends POJO {
    constructor(data) {
        super(data);
    }
    figth() {
        // TODO now the order of who start the figth it's random (Neto style)
        if (util.getRandomBoolean()) {
            if (this.p1.getProp(life) > 0) {

            }
        }


    }
}

let template = {
    agressive: true,
    life: 100,
    mana: 100,
    defense: 90,
    name: 'name',
    skillTree: [{}],
    abilityTree: {
        strength: 40,
        dexterity: 30,
        stamina: 60,
        life: 45,
    },
    inventary: [{
        wepon: new Item({
            id: 01,
            name: "name",
            minDamage: 10,
            maxDamage: 20,
            state: 10,
            magic: {
                name: "fire",
                maxDamage: 2,
                minDamage: 3,
            }
        })
    }],
    id: 1,
    pack: {
        slots: 10,
        content: []
    }
}


module.exports = {
    Item,
    PJ,
    Environment,
    Fight,
    template
}