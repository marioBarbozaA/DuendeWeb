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
    //-------------------------------------------------------------------------------------
    //                               GalleryImage Functions
    //-------------------------------------------------------------------------------------
    async addGalleryImage(req, res, next) {
        try {
            const jsonImage = req.body;
            await Gallery.create({
                "name": jsonImage.name,
                "category": jsonImage.category,
                "subCategory": jsonImage.subCategory,
                "description": jsonImage.description,
                "date": jsonImage.date,
                "tags": jsonImage.tags,
                "mainImage": jsonImage.mainImage,
                "images": jsonImage.images,
                "status": jsonImage.status
            });
    
            res.status(201).json({ state: true, message: 'Se ha agregado la imagen exitosamente' });
        } catch (error) {
            res.status(500).json({ message: `Error del servidor: ${error}` });
        }
        next();
    }


    async updateGalleryImage(req, res, next) {
        try {
            const jsonImage = req.body;
            const imageId = jsonImage._id; 
        
            const imageFound = await Gallery.findOne({ _id: imageId });
    
            if (!imageFound) {
                return res.status(404).json({ message: 'La imagen no se encuentra' });
            }

            const updateFields = {
                "name": jsonImage.name,
                "category": jsonImage.category,
                "subCategory": jsonImage.subCategory,
                "description": jsonImage.description,
                "date": jsonImage.date,
                "tags": jsonImage.tags,
                "mainImage": jsonImage.mainImage,
                "images": jsonImage.images,
                "status": jsonImage.status
            };
    
            // Actualizar la imagen en la base de datos
            await Gallery.updateOne({ _id: imageId }, { $set: updateFields });
    
            res.status(200).json({ state: true, message: 'La imagen se ha modificado exitosamente' });
        } catch (error) {
            res.status(500).json({ message: `Error del servidor: ${error}` });
        }
        next();
    }
    

    async deleteGalleryImage(req, res, next) {
        try {
            const jsonImage = req.body;
            const imageId = jsonImage.imageId; 
            
            const imageFound = await Gallery.findOne({ _id: imageId });
    
            if (!imageFound) {
                return res.status(404).json({ message: 'La imagen no se encuentra' });
            }
    
            // Eliminar la imagen de la base de datos
            await Gallery.deleteOne({ _id: imageId });
    
            res.status(200).json({ state: true, message: 'La imagen se ha eliminado exitosamente' });
        } catch (error) {
            res.status(500).json({ message: `Error del servidor: ${error}` });
        }
        next();
    }
    

    async getGalleryImagesByCategory(req, res, next) {
        try {
            const category = req.params.category; 
            const images = await Gallery.find({ category });
    
            if (images.length === 0) {
                return res.status(404).json({ message: 'No se encontraron imágenes en esta categoría' });
            }
    
            res.status(200).json(images);
        } catch (error) {
            res.status(500).json({ message: `Error del servidor: ${error}` });
        }
        next();
    }

    async getAllImages(req, res, next) {
        try {
            const images = await Gallery.find({});
    
            if (images.length === 0) {
                return res.status(404).json({ message: 'No se encontraron imágenes en la galería' });
            }
    
            res.status(200).json(images);
        } catch (error) {
            res.status(500).json({ message: `Error del servidor: ${error}` });
        }
        next();
    }


    //-------------------------------------------------------------------------------------
    //                                 Message Functions
    //-------------------------------------------------------------------------------------
    
    async addMessage(req, res, next) {
        try {
            const jsonMessage = req.body;
            await Message.create({
                "user": jsonMessage.user,
                "message": jsonMessage.message,
                "response": jsonMessage.response,
                "type": jsonMessage.type,
                "date": jsonMessage.date,
                "galleryImageId": jsonMessage.galleryImageId,
                "status": jsonMessage.status
            });
    
            res.status(201).json({ state: true, message: 'El mensaje se ha agregado exitosamente' });
        } catch (error) {
            res.status(500).json({ message: `Error del servidor: ${error}` });
        }
        next();
    }

    async deleteMessage(req, res, next) {
        try {
            const jsonMessage = req.body;
            const messageId = jsonMessage.messageId; 
    
        
            const messageFound = await Message.findOne({ _id: messageId });
    
            if (!messageFound) {
                return res.status(404).json({ message: 'El mensaje no se encuentra' });
            }
    
            // Eliminar el mensaje de la base de datos
            await Message.deleteOne({ _id: messageId });
    
            res.status(200).json({ state: true, message: 'El mensaje se ha eliminado exitosamente' });
        } catch (error) {
            res.status(500).json({ message: `Error del servidor: ${error}` });
        }
        next();
    }

    async getAllMessages(req, res, next){
        try {
            const messages = await Message.find({});
            
            if (messages.length===0){
                return res.status(404).json({message: `No se encontraron mensajes`})
            }

            res.status(200).json(messages);
        } catch (error){
            res.status(500).jeson({message: `Error del servidor: ${error}`})
        }
        next();
    }
    
    //-------------------------------------------------------------------------------------
    //                                Appointment Functions
    //-------------------------------------------------------------------------------------
    async createAppointment(req, res, next) {
        try {
            const jsonAppointment = req.body;
            await Appointment.create({
                "participants": jsonAppointment.participants,
                "type": jsonAppointment.type,
                "details": jsonAppointment.details,
                "date": jsonAppointment.date,
                "image": jsonAppointment.image,
                "status": jsonAppointment.status,
                "startingTime": jsonAppointment.startingTime,
                "endingTime": jsonAppointment.endingTime,
                "orderNumber": jsonAppointment.orderNumber
            });
    
            res.status(201).json({ state: true, message: 'El compromiso se ha creado exitosamente' });
        } catch (error) {
            res.status(500).json({ message: `Error del servidor: ${error}` });
        }
        next();
    }

    async updateAppointment(req, res, next) {
        try {
            const jsonAppointment = req.body;
            const appointmentId = jsonAppointment._id; 
    
            
            const appointmentFound = await Appointment.findOne({ _id: appointmentId });
    
            if (!appointmentFound) {
                return res.status(404).json({ message: 'El compromiso no se encuentra' });
            }
    
            
            const updateFields = {
                "participants": jsonAppointment.participants,
                "type": jsonAppointment.type,
                "details": jsonAppointment.details,
                "date": jsonAppointment.date,
                "image": jsonAppointment.image,
                "status": jsonAppointment.status,
                "startingTime": jsonAppointment.startingTime,
                "endingTime": jsonAppointment.endingTime,
                "orderNumber": jsonAppointment.orderNumber
            };
    
            // Actualizar el compromiso en la base de datos
            await Appointment.updateOne({ _id: appointmentId }, { $set: updateFields });
    
            res.status(200).json({ state: true, message: 'El compromiso se ha modificado exitosamente' });
        } catch (error) {
            res.status(500).json({ message: `Error del servidor: ${error}` });
        }
        next();
    }

    async deleteAppointment(req, res, next) {
        try {
            const jsonAppointment = req.body;
            const appointmentId = jsonAppointment._id; 

            const appointmentFound = await Appointment.findOne({ _id: appointmentId });
    
            if (!appointmentFound) {
                return res.status(404).json({ message: 'El compromiso no se encuentra' });
            }
    
            await Appointment.deleteOne({ _id: jsonAppointment._id });
    
            res.status(200).json({ state: true, message: 'El compromiso se ha eliminado exitosamente' });
        } catch (error) {
            res.status(500).json({ message: `Error del servidor: ${error}` });
        }
        next();
    }
    
    async getAppointmentById(req, res, next) {
        try {
            const appointmentId = req.params.appointmentId; // Obtener el ID del compromiso de los parámetros de la URL
            const appointment = await Appointment.findOne({ _id: appointmentId });
    
            if (!appointment) {
                return res.status(404).json({ message: 'El compromiso no se encuentra' });
            }
    
            res.status(200).json(appointment);
        } catch (error) {
            res.status(500).json({ message: `Error del servidor: ${error}` });
        }
        next();
    }
    
    async getAllAppointments(req, res, next) {
        try {
            const appointments = await Appointment.find({});
    
            if (appointments.length === 0) {
                return res.status(404).json({ message: 'No se encontraron compromisos en la agenda' });
            }
    
            res.status(200).json(appointments);
        } catch (error) {
            res.status(500).json({ message: `Error del servidor: ${error}` });
        }
        next();
    }
    

    //-------------------------------------------------------------------------------------
    //                                
    //-------------------------------------------------------------------------------------
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

    async getAllProductsActive(req, res, next) {
        try {
            const products = await Product.find({ status: 'active' });
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

    async updateProduct(req, res, next) {
        const productData = req.body;
        console.log(productData);
        try {
            const product = await Product.findByIdAndUpdate(productData._id, productData, { new: true, lean: true });
            if (!product) {
                return res.status(404).json({ msg: 'Product not found' });
            }
            return res.status(201).json(product);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: 'Server error' + error });
        }
    }

    async deleteProduct(req, res, next) {
        try {
            const product = await Product.findByIdAndDelete(req.params.id);
            if (!product) {
                return res.status(404).json({ msg: 'Product not found' });
            }
            return res.status(200).json(product);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: 'Server error' + error });
        }
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
