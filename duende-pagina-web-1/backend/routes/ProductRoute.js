const express = require('express');
const router = express.Router();
const productControllers = require('./../controllers/ProductController.js');

router.route('/')
    .get(productControllers.getAllProducts)
    .post(productControllers.createProduct);

// router.route('/:id')
//     .get(productControllers.getProductById)
//     .put(productControllers.updateProduct)
//     .delete(productControllers.deleteProduct);

module.exports = router;