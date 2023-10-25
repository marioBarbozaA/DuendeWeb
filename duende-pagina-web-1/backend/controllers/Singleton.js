const { getInstance: getConnInstance } = require("./SingletonConexion.js");
const bcrypt = require("bcrypt");

const User = require("../models/auth/user.js");
const Usertype = require("../models/auth/usertype.js");
const Appointment = require("../models/appointment.js");
const Product = require("../models/Product.js");
const Message = require("../models/Message.js");
const ShoppingCart = require("../models/ShoppingCart.js");
const Gallery = require("../models/GalleryImage.js");
const { createAccessToken } = require("../libs/jwt.js");
const { TOKEN_SECRET } = require("../config/config.js");
const jwt = require("jsonwebtoken");

class Singleton {
  static instance;
  static count = 0;

  constructor() {
    console.log("Singleton constructor called");
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
        name: jsonImage.name,
        category: jsonImage.category,
        subCategory: jsonImage.subCategory,
        description: jsonImage.description,
        date: jsonImage.date,
        tags: jsonImage.tags,
        mainImage: jsonImage.mainImage,
        images: jsonImage.images,
        status: jsonImage.status,
      });

      res.status(201).json({
        state: true,
        message: "Se ha agregado la imagen exitosamente",
      });
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
        return res.status(404).json({ message: "La imagen no se encuentra" });
      }

      const updateFields = {
        name: jsonImage.name,
        category: jsonImage.category,
        subCategory: jsonImage.subCategory,
        description: jsonImage.description,
        date: jsonImage.date,
        tags: jsonImage.tags,
        mainImage: jsonImage.mainImage,
        images: jsonImage.images,
        status: jsonImage.status,
      };

      // Actualizar la imagen en la base de datos
      await Gallery.updateOne({ _id: imageId }, { $set: updateFields });

      res.status(200).json({
        state: true,
        message: "La imagen se ha modificado exitosamente",
      });
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
        return res.status(404).json({ message: "La imagen no se encuentra" });
      }

      // Eliminar la imagen de la base de datos
      await Gallery.deleteOne({ _id: imageId });

      res.status(200).json({
        state: true,
        message: "La imagen se ha eliminado exitosamente",
      });
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
        return res
          .status(404)
          .json({ message: "No se encontraron imágenes en esta categoría" });
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
        return res
          .status(404)
          .json({ message: "No se encontraron imágenes en la galería" });
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
        user: jsonMessage.user,
        message: jsonMessage.message,
        response: jsonMessage.response,
        type: jsonMessage.type,
        date: jsonMessage.date,
        galleryImageId: jsonMessage.galleryImageId,
        status: jsonMessage.status,
      });

      res.status(201).json({
        state: true,
        message: "El mensaje se ha agregado exitosamente",
      });
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
        return res.status(404).json({ message: "El mensaje no se encuentra" });
      }

      // Eliminar el mensaje de la base de datos
      await Message.deleteOne({ _id: messageId });

      res.status(200).json({
        state: true,
        message: "El mensaje se ha eliminado exitosamente",
      });
    } catch (error) {
      res.status(500).json({ message: `Error del servidor: ${error}` });
    }
    next();
  }

  async getAllMessages(req, res, next) {
    try {
      const messages = await Message.find({});

      if (messages.length === 0) {
        return res.status(404).json({ message: `No se encontraron mensajes` });
      }

      res.status(200).json(messages);
    } catch (error) {
      res.status(500).jeson({ message: `Error del servidor: ${error}` });
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
        participants: jsonAppointment.participants,
        type: jsonAppointment.type,
        details: jsonAppointment.details,
        date: jsonAppointment.date,
        image: jsonAppointment.image,
        status: jsonAppointment.status,
        startingTime: jsonAppointment.startingTime,
        endingTime: jsonAppointment.endingTime,
        orderNumber: jsonAppointment.orderNumber,
      });

      res.status(201).json({
        state: true,
        message: "El compromiso se ha creado exitosamente",
      });
    } catch (error) {
      res.status(500).json({ message: `Error del servidor: ${error}` });
    }
    next();
  }

  async updateAppointment(req, res, next) {
    try {
      const jsonAppointment = req.body;
      const appointmentId = jsonAppointment._id;

      const appointmentFound = await Appointment.findOne({
        _id: appointmentId,
      });

      if (!appointmentFound) {
        return res
          .status(404)
          .json({ message: "El compromiso no se encuentra" });
      }

      const updateFields = {
        participants: jsonAppointment.participants,
        type: jsonAppointment.type,
        details: jsonAppointment.details,
        date: jsonAppointment.date,
        image: jsonAppointment.image,
        status: jsonAppointment.status,
        startingTime: jsonAppointment.startingTime,
        endingTime: jsonAppointment.endingTime,
        orderNumber: jsonAppointment.orderNumber,
      };

      // Actualizar el compromiso en la base de datos
      await Appointment.updateOne(
        { _id: appointmentId },
        { $set: updateFields }
      );

      res.status(200).json({
        state: true,
        message: "El compromiso se ha modificado exitosamente",
      });
    } catch (error) {
      res.status(500).json({ message: `Error del servidor: ${error}` });
    }
    next();
  }

  async deleteAppointment(req, res, next) {
    try {
      const jsonAppointment = req.body;
      const appointmentId = jsonAppointment._id;

      const appointmentFound = await Appointment.findOne({
        _id: appointmentId,
      });

      if (!appointmentFound) {
        return res
          .status(404)
          .json({ message: "El compromiso no se encuentra" });
      }

      await Appointment.deleteOne({ _id: jsonAppointment._id });

      res.status(200).json({
        state: true,
        message: "El compromiso se ha eliminado exitosamente",
      });
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
        return res
          .status(404)
          .json({ message: "El compromiso no se encuentra" });
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
        return res
          .status(404)
          .json({ message: "No se encontraron compromisos en la agenda" });
      }

      res.status(200).json(appointments);
    } catch (error) {
      res.status(500).json({ message: `Error del servidor: ${error}` });
    }
    next();
  }

  //-------------------------------------------------------------------------------------
  // Gestion Usuarios
  //-------------------------------------------------------------------------------------
  async registerUser(req, res, next) {
    const { email, password, name, phone } = req.body;
    if (!email || !password) {
      return res.status(400).json({ msg: "Please enter all fields" });
    }
    //check for duplicate usernames in the db
    const duplicate = await User.findOne({ email: email }).exec();

    if (duplicate) {
      return res.status(400).json({ msg: "User already exists" });
    }

    try {
      //encrypt password
      const hashedPassword = await bcrypt.hash(password, 10);
      // creating the user
      const newUser = new User({
        email,
        password: hashedPassword,
        name,
        phone,
      });
      // saving the user in the database
      const userSaved = await newUser.save();

      const token = await createAccessToken({ id: userSaved._id });

      console.log("Token generado:", token);
      res.cookie("token", token);

      res.status(200).json({ userSaved, msg: "User created" });
    } catch (error) {
      res.status(500).json({ msg: "Server error" });
    }
  }

  async loginUser(req, res, next) {
    try {
      //check for find the user usernames in the db
      const { email, password } = req.body;
      console.log(email, password);
      const userFound = await User.findOne({ email: email }).exec();
      if (!userFound) {
        res
          .status(400)
          .json({ status: false, message: "User has no register" });
        return false;
      }
      if (userFound) {
        const match = await bcrypt.compare(password, userFound.password);

        if (match) {
          const token = await createAccessToken({ id: userFound._id });
          console.log("Token generado:", token);
          res.cookie("token", token);

          res.status(200).json({
            status: true,
            roles: [userFound.roles],
            message: "User logged perfectly ",
          });
          return true;
        } else {
          res.status(400).json({ status: false, message: "User not logged" });
          return false;
        }
      }
    } catch {
      res.status(500).json({ status: false, message: "Server error" });
      return false;
    }
  }

  async updatePassword(req, res, next) {
    try {
      const { email, newPassword, confirmPassword } = req.body;

      if (!email || !newPassword || !confirmPassword) {
        return res.status(400).json({ msg: "Please enter all fields" });
      }

      const userFound = await User.findOne({ email: email }).exec();
      if (!userFound) {
        res.status(400).json({ msg: "User has no register" });
        return false;
      }

      if (newPassword !== confirmPassword) {
        return res.status(400).json({ msg: "Passwords do not match" });
      }

      const hashedPassword = await bcrypt.hash(newPassword, 10);
      const newUser = await User.create({
        email: email,
        password: hashedPassword,
      });
      res.status(200).json({ msg: "User created" });
    } catch {
      res.status(500).json({ msg: "Server error" });
    }
  }

  //CREATE  A LOGOUT
  async logout(req, res) {
    res.cookie("token", "", { expires: new Date(0) });
    return res.sendStatus(200);
  }

  // create VerifyToken
  async profile(req, res, next) {
    const userFound = await User.findById(req.user.id);
    if (!userFound) return res.status(400).json({ msg: "User not found" });
    return res.json({
      id: userFound._id,
      email: userFound.email,
      name: userFound.name,
      phone: userFound.phone,
    });
  }

  // create VerifyToken

  async verifyToken(req, res, next) {
    const { token } = req.cookies;
    if (!token) return res.status(401).json({ msg: "Unauthorized1" });

    jwt.verify(token, TOKEN_SECRET, async (err, user) => {
      if (err) return res.status(401).json({ msg: "Unauthorized2" });

      const userFound = await User.findById(user.id);
      if (!userFound) return res.status(401).json({ msg: "Unauthorized3" });

      return res.json({
        id: userFound._id,
        email: userFound.email,
        name: userFound.name,
        phone: userFound.phone,
      });
    });
  }

  /////////////////////////////////////
  ////////////  PRODUCT  //////////////
  /////////////////////////////////////

  async getAllProducts(req, res, next) {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ msg: "Server error" + error });
    }
    next();
  }

  async getAllProductsActive(req, res, next) {
    try {
      const products = await Product.find({ status: "active" });
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ msg: "Server error" + error });
    }
    next();
  }

  async createProduct(productData, res) {
    console.log("Received product data:", productData);
    try {
      const product = await Product.create(productData);
      res.status(201).json(product); // send a response back to client
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error: " + error }); // send a error response back to client
    }
  }

  async updateProduct(req, res, next) {
    const productData = req.body;
    try {
      const product = await Product.findByIdAndUpdate(
        productData._id,
        productData,
        { new: true, lean: true }
      );
      if (!product) {
        return res.status(404).json({ msg: "Product not found" });
      }
      return res.status(201).json(product);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: "Server error" + error });
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
