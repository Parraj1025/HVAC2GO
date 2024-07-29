require('dotenv').config(); // Load environment variables
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the cors package


const app = express();
const port = 3001;

// Middleware to parse JSON bodies
app.use(express.json());

//allow requests from our React app's domain
app.use(cors({
  origin: 'http://localhost:5173' 
}));

// Use environment variables for connection string
const { MONGO_USER, MONGO_PASSWORD, MONGO_DB, MONGO_HOST, MONGO_PORT } = process.env;

console.log(`Connecting to MongoDB at mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`);


// Constructed the connection string for MongoDB with authentication
const connectionString = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  authMechanism: 'SCRAM-SHA-256' 
})
  .then(() => {
    console.log('Connected successfully to MongoDB');
    app.listen(port, () => {
      console.log(`Server is listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Mongo connection error: ', err.message);
  });
