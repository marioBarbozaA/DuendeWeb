const express = require('express');
const router = express.Router();
const productControllers = require('./../controllers/ProductController.js');

router.route('/')
    .get(productControllers.getAllProductsActive)
    .post(productControllers.createProduct);

router.route('/admin')
    .get(productControllers.getAllProducts);
router.route('/admin/:id')
    .put(productControllers.updateProduct);


// router.route('/:id')
//     .get(productControllers.getProductById)
//     .put(productControllers.updateProduct)
//     .delete(productControllers.deleteProduct);

module.exports = router;