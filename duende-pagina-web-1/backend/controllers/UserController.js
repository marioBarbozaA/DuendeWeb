const SingletonDAO = require('./Singleton.js');
const User = require('../models/auth/user.js');
const bcrypt = require('bcrypt');

const loginUser = async (req, res, next) => {

    const { email, password } = req.body;
    if(!email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }    
    let valueLoggin = await SingletonDAO.loginUser(req, res, next);

    if (valueLoggin == false) {
        console.log("User login failed");
    } else {
        console.log("User login success");
    }
}

const registerUser = async (req, res, next) => {
    
    const { email, password, name, phone } = req.body;

    if (!email || !password) {
        return res.status(400).json({ msg: 'Invalid request body' });
    }
    //check for duplicate usernames in the db
    const duplicate = await User.findOne({ email: email }).exec();

    if (duplicate) {
        return res.status(400).json({ msg: 'User already exists' });
    }

    try {
        //encrypt password

        const hashedPassword = await bcrypt.hash(password, 10);
        
        //create and store the new user        
        await User.create({ "email": email, "password": hashedPassword , 
        "name": name, "phone": phone});
        
        res.status(200).json({ msg: 'User created' });
    } catch (e) {
        res.status(500).json({ msg: 'Server error'+ e });
    }
}

const updatePassword = async (req, res, next) => {
    try{
        const jsonBody = req.body;

        if (!jsonBody.usuario || !jsonBody.newPassword || !jsonBody.confirmPassword) {
            return res.status(400).json({ msg: 'Please enter all fields' });
        }

        if (jsonBody.newPassword !== jsonBody.confirmPassword) {
            return res.status(400).json({ msg: 'Passwords do not match' });
        }

        const userToUpdate = await User.findOne({ email: jsonBody.usuario });
        
        if (!userToUpdate) {
            return res.status(400).json({ msg: 'User does not exist' });
        }

        const hashedPassword = await bcrypt.hash(jsonBody.newPassword, 10);

        await User.updateOne({ email: jsonBody.usuario }, { password: hashedPassword });

        res.status(200).json({ msg: 'Password updated' });

    }catch(e){
        res.status(500).json({ msg: 'Server error'+ e });
    }
}

module.exports = { loginUser, registerUser, updatePassword };