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

// Middleware for CORS (allow access from client-side domains and PayPal)
app.use(cors({
  origin: [
    'http://localhost:5173',   
    'https://hvac2go.onrender.com',  
    'https://www.paypal.com',   // PayPal production
    'https://sandbox.paypal.com',  // PayPal sandbox for testing
  ],
  credentials: true,
}));

// Apply security headers using helmet
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: [
        "'self'",
        'https://www.paypal.com',
        'https://sandbox.paypal.com',
        'https://www.sandbox.paypal.com/sdk/js',
        "'unsafe-inline'",
        "blob:"
      ],
      workerSrc: ["'self'", "blob:"],
      frameSrc: [
        "'self'",
        'https://www.paypal.com',
        'https://sandbox.paypal.com',
        'https://www.youtube.com', 
        'https://www.sandbox.paypal.com/smart/buttons', 
      ],
      connectSrc: [
        "'self'",
        'https://www.paypal.com',
        'https://sandbox.paypal.com',
        'https://api-m.sandbox.paypal.com',
        'https://www.paypalobjects.com',
      ],
      imgSrc: [
        "'self'", 
        'data:', 
        'https://www.paypal.com', 
        'https://sandbox.paypal.com',
        'https://www.paypalobjects.com',
      ],
      styleSrc: [
        "'self'", 
        "'unsafe-inline'"
      ],
      objectSrc: ["'none'"],
    },
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


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/dist', 'index.html'));
});

console.log(`Server running on port ${port}`);
