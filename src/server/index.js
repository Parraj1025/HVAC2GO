import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import helmet from 'helmet';  // Security headers
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;

const app = express();
const port = process.env.PORT || 3000;

// Middleware for CORS (allow access from client-side domains and PayPal)
app.use(cors({
  origin: [
    'http://localhost:5173',   // Local development
    'https://hvac2go.onrender.com',  // Production app
    'https://www.paypal.com',   // PayPal production
    'https://sandbox.paypal.com',  // PayPal sandbox for testing
  ],
  credentials: true,
}));

// Apply security headers using helmet
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'", 'https://www.paypal.com', 'https://sandbox.paypal.com'],
      scriptSrc: [
        "'self'",
        'https://www.paypal.com',
        'https://sandbox.paypal.com',
        "'unsafe-inline'",
        "'unsafe-eval'"
      ],
      frameSrc: ['https://www.paypal.com', 'https://sandbox.paypal.com'],
      connectSrc: [
        "'self'",
        'https://www.paypal.com',
        'https://sandbox.paypal.com',
        'https://api-m.sandbox.paypal.com',
      ],
      imgSrc: ["'self'", 'data:', 'https://www.paypal.com', 'https://sandbox.paypal.com'],
      styleSrc: ["'self'", 'https://www.paypal.com', 'https://sandbox.paypal.com', "'unsafe-inline'"],
    }
  })
);


// Parse incoming requests with JSON payloads
app.use(express.json());

// MongoDB connection
mongoose.connect(MONGO_CONNECTION_STRING)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
  });


// Serve user-related API routes
app.use('/api', userRoutes);

// Serve static files from the "dist" directory (React production build)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, '../../client/dist')));

// Fallback: serve React app for any route not handled by the API
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/dist', 'index.html'));
});

console.log(`Server running on port ${port}`);
