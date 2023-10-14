const mongoose = require('mongoose');
require('dotenv').config();

// Define the database connection URL using the environment variable
const dbURL = process.env.MONGO_URL;

// Function to establish the database connection
async function dbConnect() {
  try {
    // Establish the connection
    await mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Successfully connected to MongoDB Atlas!");

    // Event listeners for handling connection events
    mongoose.connection.on('connected', () => {
      console.log('MongoDB is connected');
    });

    mongoose.connection.on('error', (err) => {
      console.error('MongoDB connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
      console.log('Disconnected from MongoDB Atlas');
    });
  } catch (error) {
    console.error("Unable to connect to MongoDB Atlas:", error);
  }
}

// Function to disconnect from the database
async function dbDisconnect() {
  mongoose.connection.close();
  console.log("Disconnected from MongoDB Atlas!");
}

module.exports = { dbConnect, dbDisconnect };
