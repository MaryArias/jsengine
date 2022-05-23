
var DATABASE = require('./src/db.js');

db = new DATABASE.DB(DATABASE.mockData, true, 1)
db.deleteTable(22);