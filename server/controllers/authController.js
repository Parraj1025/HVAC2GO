const bcrypt = requirconst bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Technician = require('../models/Technician');

exports.registerUser = async (req, res) => {
    const { name, email, password, address } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashedPassword, address });

        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error registering user' });
    }
};

exports.registerTechnician = async (req, res) => {
    const { name, email, password, services } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const technician = new Technician({ name, email, password: hashedPassword, services });

        await technician.save();
        res.status(201).json({ message: 'Technician registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error registering technician' });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email }) || await Technician.findOne({ email });

        if (!user) {
            return res.status(404).json({ error: 'User/Technician not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Error logging in' });
    }
};
