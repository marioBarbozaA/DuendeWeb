const { getInstance: getSingleton } = require('./Singleton.js');
const SingletonDAO = getSingleton();
const Sale = require('../models/Sales.js');


module.exports = { getCarUser };