import React, { useState } from 'react';
import axios from 'axios';

const RegisterUser = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '', address: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/auth/register/user', formData);
            alert(response.data.message);
        } catch (error) {
            alert('Error registering user');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
            <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterUser;
