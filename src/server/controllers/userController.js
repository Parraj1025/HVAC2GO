//userController.js
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const generateToken = (user) => {
  return jwt.sign(
    { id: user.id },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
};

export const registerUser = async (req, res) => {
  try {
    const { name, email, password, phoneNumber } = req.body;

    // Validate required fields
    if (!name || !email || !password || !phoneNumber) {
      return res.status(400).json({ message: "All fields are required" });
    }

    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    user = new User({ name, email, password, phoneNumber });

    // Hash the password before saving
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const token = generateToken(user);
    res.status(201).json({ token, message: "Registration successful" });
  } catch (err) {
    console.error("Error during registration:", err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    let user = await User.findOne({ email }).select('+password'); // Ensure password is included
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user);
    res.status(200).json({ token, message: "Login successful" });
  } catch (err) {
    console.error("Error during login:", err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getCurrentUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user data:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user by ID:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateUserById = async (req, res) => {
  try {
    const { name, email, phoneNumber } = req.body;
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { name, email, phoneNumber },
      { new: true }
    ).select('-password');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Error updating user by ID:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteUserById = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error("Error deleting user by ID:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

