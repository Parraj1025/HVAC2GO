import React, { useState } from 'react';
import axios from 'axios';

const RegisterTechnician = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '', services: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/auth/register/technician', formData);
            alert(response.data.message);
        } catch (error) {
            alert('Error registering technician');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
            <input type="text" name="services" value={formData.services} onChange={handleChange} placeholder="Services" />
            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterTechnician;
