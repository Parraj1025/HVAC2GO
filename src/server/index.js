import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';
import helmet from 'helmet';  // Import helmet for security headers
import userRoutes from './routes/userRoutes.js';

// Import the entire PayPal SDK as a default import
import paypal from '@paypal/checkout-server-sdk';

dotenv.config();

const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
const PAYPAL_SECRET_KEY = process.env.PAYPAL_SECRET_KEY;
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: ['http://localhost:5173', 'https://hvac2go.onrender.com', 'https://www.paypal.com'],
  credentials: true,
}));


// Apply security headers using helmet
app.use(helmet());

// Configure Content Security Policy (CSP) with helmet
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'", 'https://www.paypal.com'],
    scriptSrc: ["'self'", 'https://www.paypal.com', "'unsafe-inline'", "'unsafe-eval'"],  // Allow PayPal scripts
    frameSrc: ["'self'", 'https://www.paypal.com'],  // Allow PayPal iframes for buttons
    connectSrc: ["'self'", 'https://www.paypal.com', 'https://api-m.sandbox.paypal.com'],  // Allow PayPal API requests
    imgSrc: ["'self'", 'data:', 'https://www.paypal.com'],  // Allow PayPal images
    styleSrc: ["'self'", 'https://www.paypal.com', "'unsafe-inline'"],  // Allow PayPal inline styles
    objectSrc: ["'none'"],  // Disallow embedding of objects like Flash, Silverlight, etc.
    upgradeInsecureRequests: [],  // Ensure HTTPS is used
  }
}));

if (!MONGO_CONNECTION_STRING) {
  console.error('Mongo connection string is not defined');
  process.exit(1);
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

// PayPal Client for SDK
const payPalClient = () => {
  let environment = new paypal.core.SandboxEnvironment(PAYPAL_CLIENT_ID, PAYPAL_SECRET_KEY);
  return new paypal.core.PayPalHttpClient(environment);
};

// Fallback method if SDK is deprecated: Use axios to directly call PayPal API
const getAccessToken = async () => {
  const auth = Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_SECRET_KEY}`).toString('base64');
  const response = await axios({
    url: 'https://api-m.sandbox.paypal.com/v1/oauth2/token',
    method: 'post',
    headers: {
      'Authorization': `Basic ${auth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: 'grant_type=client_credentials',
  });
  return response.data.access_token;
};

// API route to create an order
app.post('/api/create-order', async (req, res) => {
  const { amount } = req.body;
  try {
    const request = new paypal.orders.OrdersCreateRequest();
    request.requestBody({
      intent: 'CAPTURE',
      purchase_units: [{
        amount: { currency_code: 'USD', value: amount }
      }]
    });

    const response = await payPalClient().execute(request);
    res.json({ id: response.result.id });
  } catch (error) {
    console.error('PayPal order creation error:', error.message);
    res.status(500).send('Error creating PayPal order');
  }
});

// API route to capture an order
app.post('/api/capture-order/:orderId', async (req, res) => {
  const { orderId } = req.params;
  try {
    const request = new paypal.orders.OrdersCaptureRequest(orderId);
    request.requestBody({});
    const capture = await payPalClient().execute(request);
    res.json(capture.result);
  } catch (error) {
    console.error('PayPal order capture error:', error.message);
    res.status(500).send('Error capturing PayPal order');
  }
});

// Fallback route using axios for order creation (in case SDK is deprecated)
app.post('/api/create-order-axios', async (req, res) => {
  const { amount } = req.body;
  try {
    const token = await getAccessToken();
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    };
    const data = {
      intent: 'CAPTURE',
      purchase_units: [{
        amount: { currency_code: 'USD', value: amount }
      }],
    };
    const response = await axios.post('https://api-m.sandbox.paypal.com/v2/checkout/orders', data, { headers });
    res.json({ id: response.data.id });
  } catch (error) {
    console.error('Error creating PayPal order with axios:', error.message);
    res.status(500).send('Error creating PayPal order');
  }
});

// Fallback route using axios for order capture
app.post('/api/capture-order-axios/:orderId', async (req, res) => {
  const { orderId } = req.params;
  try {
    const token = await getAccessToken();
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    };
    const response = await axios.post(`https://api-m.sandbox.paypal.com/v2/checkout/orders/${orderId}/capture`, {}, { headers });
    res.json(response.data);
  } catch (error) {
    console.error('Error capturing PayPal order with axios:', error.message);
    res.status(500).send('Error capturing PayPal order');
  }
});

// API routes
app.use('/api', userRoutes);

// Serve static files from the "dist" directory
app.use(express.static(path.join(__dirname, '../../client/dist')));

// Serve the React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/dist', 'index.html'));
});

console.log(`Server running on port ${port}`);
