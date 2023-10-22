const express = require('express');
const router = express.Router();
const adminUserControllers = require('./../controllers/UserController.js');

router.route('/auth')
    .post(adminUserControllers.loginUser);
router.route('/register')
    .post(adminUserControllers.registerUser)

router.route('/updatePassword')
    .put(adminUserControllers.updatePassword);


module.exports = router;