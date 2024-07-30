require('dotenv').config(); // Load environment variables
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the cors package
const authRoutes = require('./routes/authRoutes');


const app = express();
const port = 3001;

// Middleware to parse JSON bodies
app.use(express.json());

// Allow requests from our React app's domain
app.use(cors({
  origin: 'http://localhost:3000' 
}));

// Use environment variables for connection string
const { MONGO_USER, MONGO_PASSWORD, MONGO_DB, MONGO_HOST, MONGO_PORT } = process.env;

// Log environment variables to verify they are loaded correctly
console.log('MongoDB Credentials:', {
  MONGO_USER, 
  MONGO_PASSWORD, 
  MONGO_DB, 
  MONGO_HOST, 
  MONGO_PORT
});

console.log(`Connecting to MongoDB at mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`);

// Constructed the connection string for MongoDB with authentication
const connectionString = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
// const connectionString = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`;


mongoose.connect(connectionString)
  .then(() => {
    console.log('Connected successfully to MongoDB');
    app.listen(port, () => {
      console.log(`Server is listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Mongo connection error: ', err.message);
  });


// Define routes after middleware
app.use('/api/auth', authRoutes);

// Error handling for server startup
app.on('error', (err) => {
  console.error('Server startup error:', err);
});
