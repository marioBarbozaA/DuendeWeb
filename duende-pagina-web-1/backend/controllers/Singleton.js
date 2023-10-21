const { getInstance: getConnInstance } = require('./SingletonConexion.js');
const bcrypt = require('bcrypt');

const User = require('../models/auth/user.js');
const Usertype = require('../models/auth/usertype.js');
const Appointment = require('../models/appointment.js');
const Product = require('../models/Product.js');
const Message = require('../models/Message.js');
const ShoppingCart = require('../models/ShoppingCart.js');
const Gallery = require('../models/GalleryImage.js');

class Singleton {
    static instance;
    static count = 0;

    constructor() {
        console.log('Singleton constructor called');
        this.conn = getConnInstance();
    }

    static getInstance() {
        if (this.instance) {
            console.log("Returning instance");
            return this.instance;
        }
        console.log("creating instance");
        this.instance = new Singleton();

        this.count = this.count + 1;
        return this.instance;
    }

    /////////////////////////////////////
    ////////////  USER  /////////////////
    /////////////////////////////////////
    
    async registerUser(req, res, next) {

        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ msg: 'Please enter all fields' });
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
            const newUserResult = await User.create({ "email": email, "password": hashedPassword, name: "name", phone: "phone"});
            res.status(200).json({ msg: 'User created' });
        } catch {
            res.status(500).json({ msg: 'Server error' });
        }
    }

    async loginUser(req, res, next) {
        try {

            //check for find the user usernames in the db
            const { email, password } = req.body;
            console.log(email, password);
            const userFound = await User.findOne({ email: email }).exec();
            if (!userFound) {
                res.status(400).json({ status: false, message: 'User has no register' });
                return false;
            }
            if (userFound) {

                const match = await bcrypt.compare(password, userFound.password);

                if (match) {

                    res.status(200).json({ status: true, roles: [userFound.roles], message: 'User logged perfectly ' });
                    return true;

                } else {
                    res.status(400).json({ status: false, message: 'User not logged' });
                    return false;
                }
            }

        } catch {
            res.status(500).json({ status: false, message: 'Server error' });
            return false;
        }
    }

    async updatePassword(req, res, next) {
        try{
            const { email, newPassword, confirmPassword } = req.body;

            if (!email || !newPassword || !confirmPassword) {
                return res.status(400).json({ msg: 'Please enter all fields' });
            }

            const userFound = await User.findOne({ email: email }).exec();
            if(!userFound){
                res.status(400).json({ msg: 'User has no register' });
                return false
            } 

            if (newPassword !== confirmPassword) {
                return res.status(400).json({ msg: 'Passwords do not match' });
            }

            const hashedPassword = await bcrypt.hash(newPassword, 10);
            const newUser = await User.create({ "email": email, "password": hashedPassword });
            res.status(200).json({ msg: 'User created' });
        } catch {
            res.status(500).json({ msg: 'Server error' });
        }
    }

    /////////////////////////////////////
    ////////////  PRODUCT  //////////////
    /////////////////////////////////////

    async getAllProducts(req, res, next) {
        try {
            const products = await Product.find();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ msg: 'Server error' + error });
        }
        next();
    }

    async createProduct(req, res, next) {
        const productData = req.body;
        console.log(productData);
        try {
            const product = await Product.create(productData);
            return res.status(201).json(product);
        } catch (error) {
            return res.status(500).json({ msg: 'Server error' + error });
        }
        next();
    }
}

let instance = null;

const getInstance = () => {
    if (!instance) {
        instance = new Singleton();
    }
    return instance;
};

module.exports = { getInstance };