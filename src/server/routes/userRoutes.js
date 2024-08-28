import express from 'express';
import { registerUser, loginUser, getUsers, getUserById, updateUserById, deleteUserById, getCurrentUser } from '../controllers/userController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Protected routes
router.get('/users', auth, getUsers);
router.get('/users/:id', auth, getUserById);
router.put('/users/:id', auth, updateUserById);
router.delete('/users/:id', auth, deleteUserById);
router.get('/users/me', auth, getCurrentUser);

export default router;
