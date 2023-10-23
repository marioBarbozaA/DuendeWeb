const { getInstance: getSingleton } = require("./Singleton.js");
const SingletonDAO = getSingleton();
const User = require("../models/auth/user.js");
const bcrypt = require("bcrypt");
const { sendRecoveryEmail } = require("../utilities/email");

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  let valueLoggin = await SingletonDAO.loginUser(req, res, next);

  if (valueLoggin == false) {
    console.log("User login failed");
  } else {
    console.log("User login success");
  }
};

const registerUser = async (req, res, next) => {
  const { email, password, name, phone } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: "Invalid request body" });
  }
  //check for duplicate usernames in the db
  const duplicate = await User.findOne({ email: email }).exec();

  if (duplicate) {
    return res.status(400).json({ msg: "User already exists" });
  }

  try {
    //encrypt password

    const hashedPassword = await bcrypt.hash(password, 10);

    //create and store the new user
    /*await User.create({
      email: email,
      password: hashedPassword,
      name: name,
      phone: phone,
    });
    */

    res.status(200).json({ msg: "User created" });
  } catch (e) {
    res.status(500).json({ msg: "Server error" + e });
  }
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

module.exports = { loginUser, registerUser, updatePassword };
