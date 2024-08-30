import express from 'express';
import { registerUser, loginUser, getCurrentUser } from '../controllers/userController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Protected routes
router.get('/users/me', auth, getCurrentUser);

export default router;
