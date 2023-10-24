const express = require("express");
const router = express.Router();
const adminUserControllers = require("./../controllers/UserController.js");
const { authRequire } = require("../middlewares/validateToken.js");
router.route("/auth").post(adminUserControllers.loginUser);
router.route("/register").post(adminUserControllers.registerUser);

router.route("/updatePassword").put(adminUserControllers.updatePassword);
router.route("/logout").put(adminUserControllers.logout);
router.route("/profile").get(authRequire, adminUserControllers.profile);
module.exports = router;
