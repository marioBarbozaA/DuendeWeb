require('dotenv').config();

const express = require('express');
const initializeDatabase = require('./db.js');


//express app
const app = express();

//routes
app.use('/login', require('./routes/UserRoute.js'));
app.use('/gallery', require('./routes/GalleryImageRoute.js'));
app.use('/appointments', require('./routes/AppointmentRoute.js'));
app.use('shopppingCart', require('./routes/ShoppingCartRoute.js'));
app.use('/Product', require('./routes/ProductRoute.js'));
app.use('/message', require('./routes/MessageRoute.js'));

//listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening for requests on port 4000');
});

//connect to mongodb
initializeDatabase();
