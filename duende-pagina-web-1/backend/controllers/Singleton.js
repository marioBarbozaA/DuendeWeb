const SingletonConnexion = require('./SingletonConexion.js');

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
        //Database connection
        SingletonConnexion.dbConnect();
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

    async registerUser(req, res, next) {
        next();
    }
}

const dao = Singleton.getInstance();
module.exports = dao;