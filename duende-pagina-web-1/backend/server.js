require('dotenv').config();
const PORT = process.env.PORT || 3500;
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const express = require('express');

//Singleton Instance
const { getInstance: getSingleton } = require('./controllers/Singleton.js');

// Express app
const app = express();

// Middleware for parsing JSON request bodies
app.use(express.json());

// Use CORS middleware with the defined options
app.use(cors(corsOptions));

// Middleware for setting response headers
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');  // Replace with your frontend application’s URL
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        return res.status(200).json({});
    }
    next();
});

// Routes
app.use('/login', require('./routes/UserRoute.js'));
app.use('/gallery', require('./routes/GalleryImageRoute.js'));
app.use('/appointments', require('./routes/AppointmentRoute.js'));
app.use('/shoppingCart', require('./routes/ShoppingCartRoute.js'));
app.use('/product', require('./routes/ProductRoute.js'));
app.use('/message', require('./routes/MessageRoute.js'));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    const singleton = getSingleton();
});

