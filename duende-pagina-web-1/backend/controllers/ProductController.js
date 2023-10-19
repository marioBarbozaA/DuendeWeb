const SingletonDAO = require('./Singleton.js');
const Product = require('../models/Product.js');


// Controller to get all products
const getAllProducts = async (req, res, next) => {
    try{    
        await SingletonDAO.getAllProducts(req, res, next);
    } catch(error) {
        res.status(500).json({ message: "Server error: "+ error });
    }
};

// Controller to create a new product
const createProduct = async (req, res, next) => {
    // Assuming you receive the product data in the request body
    const productData = req.body;
  
    console.log('Received product data:', productData);
  
    try {
      const product = await SingletonDAO.createProduct(req, res, next);
    } catch (error) {
      console.error(error);
    }
  };

module.exports = { getAllProducts, createProduct };