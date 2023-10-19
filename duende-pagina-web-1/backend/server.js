require('dotenv').config();
const PORT = process.env.PORT || 3500;
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const express = require('express');
const initializeDatabase = require('./db.js');


//express app
const app = express();

// Middleware for parsing JSON request bodies
app.use(express.json());


//routes
app.use('/login', require('./routes/UserRoute.js'));
app.use('/gallery', require('./routes/GalleryImageRoute.js'));
app.use('/appointments', require('./routes/AppointmentRoute.js'));
app.use('/shoppingCart', require('./routes/ShoppingCartRoute.js'));
app.use('/product', require('./routes/ProductRoute.js'));
app.use('/message', require('./routes/MessageRoute.js'));

//
app.use(cors(corsOptions));


//listen for requests
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

