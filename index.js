
var DATABASE = require('./src/db.js');
var rpg = require('./src/rpg.js');
var utilities = require('./src/utilities.js');

db = new DATABASE.DB(DATABASE.mockData, true, 1)
// db.deleteTable(22);

// p1 = new rpg.PJ()
// console.log(p1)
// console.log(p1.getProp('life'))
console.log(utilities.getRandomBoolean())