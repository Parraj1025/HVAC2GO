import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import helmet from 'helmet';  // Security headers
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: [
    'http://localhost:5173', 
    'https://hvac2go.onrender.com', 
    'https://www.paypal.com', 
    'https://sandbox.paypal.com',
  ],
  credentials: true,
}));

// Apply security headers using helmet
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'", 'https://www.paypal.com', 'https://sandbox.paypal.com'],
    scriptSrc: ["'self'", 'https://www.paypal.com', 'https://sandbox.paypal.com', "'unsafe-inline'", "'unsafe-eval'"],
    frameSrc: ["'self'", 'https://www.paypal.com', 'https://sandbox.paypal.com'],
    connectSrc: ["'self'", 'https://www.paypal.com', 'https://sandbox.paypal.com', 'https://api-m.sandbox.paypal.com'],
    imgSrc: ["'self'", 'data:', 'https://www.paypal.com', 'https://sandbox.paypal.com'],
    styleSrc: ["'self'", 'https://www.paypal.com', 'https://sandbox.paypal.com', "'unsafe-inline'"],
    objectSrc: ["'none'"],
    upgradeInsecureRequests: [],
  }
}));

// Connect to MongoDB
mongoose.connect(MONGO_CONNECTION_STRING)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Mongo connection error:', err.message);
  });

// API routes
app.use('/api', userRoutes);

// Serve static files
app.use(express.static(path.join(__dirname, '../../client/dist')));

// Serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/dist', 'index.html'));
});

console.log(`Server running on port ${port}`);
