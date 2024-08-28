import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import userRoutes from './routes/userRoutes.js';
import paypalRoutes from './routes/paypalRoutes.js';

dotenv.config();

const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
const PAYPAL_SECRET_KEY = process.env.PAYPAL_SECRET_KEY;

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(cors({
  origin: ['http://localhost:5173', 'https://hvac2go.onrender.com'],
  credentials: true,
}));

const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;

if (!MONGO_CONNECTION_STRING) {
  console.error('Mongo connection string is not defined');
  process.exit(1); // Exit the application if the connection string is not defined
}

// Use import.meta.url to get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Connect to MongoDB
mongoose.connect(MONGO_CONNECTION_STRING)
  .then(() => {
    console.log('Connected successfully to MongoDB Atlas');
    app.listen(port, () => {
      console.log(`Server is listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Mongo connection error: ', err.message);
  });

// Test route
app.get('/test', (req, res) => {
  res.send('Test route is working!');
});

// API routes
app.use('/api', userRoutes);
app.use('/api', paypalRoutes);

// Serve static files from the "dist" directory
app.use(express.static(path.join(__dirname, '../../client/dist')));

// Serve the React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/dist', 'index.html'));
});

console.log(`Server running on port ${port}`);
