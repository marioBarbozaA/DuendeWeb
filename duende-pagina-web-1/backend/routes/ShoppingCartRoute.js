const express = require('express');
const router = express.Router();
const ShoppingCart = require('../controllers/ShoppingCartController.js');

router.route('/:id')
    .get(ShoppingCart.getCarUser)

router.route('/addProduct/:userId/:productId/:quantity')
    .put(ShoppingCart.addProduct)

module.exports = router;