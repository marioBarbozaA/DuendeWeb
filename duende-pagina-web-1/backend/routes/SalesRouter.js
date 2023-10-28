const express = require('express');
const router = express.Router();
const saleController = require('./../controllers/SalesController.js');

const {upload, updateImagePaths} = require('./../utilities/saveImages.js');


module.exports = router;