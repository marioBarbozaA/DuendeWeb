// db.js
const mongoose = require('mongoose');
require('dotenv').config();

const Usertype = require('./models/auth/usertype');

async function initializeDefaultData() {
    try {
        // Crear tipos de usuario si no existen
        const defaultUsertypes = ['client', 'owner', 'unasigned'];
        for(let type of defaultUsertypes) {
            const exists = await Usertype.findOne({ name: type });
            if(!exists) {
                const newUserType = new Usertype({ name: type });
                await newUserType.save();
            }
        }

        
    } catch(error) {
        console.error("Error inicializando datos por defecto:", error);
    }
}

// Inicializa Mongoose y conecta a la base de datos
async function initializeDatabase() {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        await initializeDefaultData();
        console.log('Conexión a MongoDB exitosa.');
    } catch (error) {
        console.error('Error en la conexión a MongoDB:', error);
    }
}

// Exporta la función de inicialización de la base de datos
module.exports = initializeDatabase;
