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
    //-------------------------------------------------------------------------------------
    //                               GalleryImage Functions
    //-------------------------------------------------------------------------------------
    async addGalleryImage(req, res, next) {
        try {
            const jsonImage = req.body;
            await GalleryImage.create({
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

            await GalleryImage.updateOne({ _id: jsonImage._id }, {
                $set: {
                    "name": jsonImage.name,
                    "category": jsonImage.category,
                    "subCategory": jsonImage.subCategory,
                    "description": jsonImage.description,
                    "date": jsonImage.date,
                    "tags": jsonImage.tags,
                    "mainImage": jsonImage.mainImage,
                    "images": jsonImage.images,
                    "status": jsonImage.status
                }
            });
    
            res.status(200).json({ state: true, message: 'La imagen se ha modificado exitosamente' });
        } catch (error) {
            res.status(500).json({ message: `Error del servidor: ${error}` });
        }
        next();
    }

    async deleteGalleryImage(req, res, next) {
        try {
            const jsonImage = req.body; 
    
            const imageFound = await GalleryImage.findOne({ _id: jsonImage.imageId });
    
            if (!imageFound) {
                return res.status(404).json({ message: 'La imagen no se encuentra' });
            }
    
            await GalleryImage.deleteOne({ _id: jsonImage.imageId });
    
            res.status(200).json({ state: true, message: 'La imagen se ha eliminado exitosamente' });
        } catch (error) {
            res.status(500).json({ message: `Error del servidor: ${error}` });
        }
        next();
    }

    async getGalleryImagesByCategory(req, res, next) {
        try {
            const category = req.params.category; 
            const images = await GalleryImage.find({ category });
    
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
            const images = await GalleryImage.find({});
    
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

    //-------------------------------------------------------------------------------------
    //                                Appointment Functions
    //-------------------------------------------------------------------------------------

    async registerUser(req, res, next) {
        next();
    }
}

const dao = Singleton.getInstance();
module.exports = dao;



