const { getInstance: getSingleton } = require('./Singleton.js');
const SingletonDAO = getSingleton();
const ShoopingCart = require('../models/ShoppingCart.js');

const getCarUser = async (req, res, next) => {
    try{
        console.log("entro a getCarUser Controller", req.params.id);
      await SingletonDAO.getCarUser(req, res, next);      
    } catch(error) {
        res.status(500).json({ message: "Server error: "+ error });
    }
}

const addProduct = async (req, res, next) => {
    try{
        console.log("entro a addProduct Controller", req.params.id);
      await SingletonDAO.addProduct(req, res, next);      
    } catch(error) {
        res.status(500).json({ message: "Server error: "+ error });
    }
}

module.exports = { getCarUser, addProduct };