const { getInstance: getSingleton } = require("./Singleton.js");
const SingletonDAO = getSingleton();
const User = require("../models/auth/user.js");
const { sendRecoveryEmail } = require("../utilities/email");

const loginUser = async (req, res, next) => {
  // const { email, password } = req.body;
  // if (!email || !password) {
  //   return res.status(400).json({ msg: "Please enter all fields" });
  // }
  await SingletonDAO.loginUser(req, res, next);

  // if (valueLoggin == false) {
  //   console.log("User login failed");
  // } else {
  //   console.log("User login success");
  // }
};

const registerUser = async (req, res, next) => {
  await SingletonDAO.registerUser(req, res, next);
};

const generateTempPassword = () => {
  // Simple example: generate a random string
  return Math.random().toString(36).slice(2);
};

const updatePassword = async (req, res) => {
  const { email } = req.body;

  // Check if email exists in the database
  const user = await User.findOne({ email });
  if (!user) {
    return res
      .status(400)
      .json({ msg: "No account with this email address exists." });
  }

  // Generate temporary password or reset token
  const tempPassword = generateTempPassword();

  // Update user's document in the database with the temporary password or reset token
  await User.updateOne({ email }, { tempPassword });

  // Send email to user
  const emailSent = await sendRecoveryEmail(email, tempPassword);
  if (!emailSent) {
    return res.status(500).json({ msg: "Failed to send recovery email." });
  }

  res.json({ msg: "Recovery email sent." });
};

//logout
const logout = async (req, res, next) => {
  await SingletonDAO.logout(req, res, next);
};

const profile = async (req, res, next) => {
  await SingletonDAO.profile(req, res, next);
};
const verifyToken = async (req, res, next) => {
  await SingletonDAO.verifyToken(req, res, next);
};
const editProfile = async (req, res, next) => {
  await SingletonDAO.editProfile(req, res, next);
};
const editarContraseña = async (req, res, next) => {
  await SingletonDAO.editarContraseña(req, res, next);
};

module.exports = {
  loginUser,
  registerUser,
  updatePassword,
  logout,
  profile,
  verifyToken,
  editProfile,
  editarContraseña,
};
