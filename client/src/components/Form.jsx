import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import collectData from './postdata';

function Form() {
  const [formData, setFormData] = useState({ first_name: '', last_name: '', email: '', phoneNumber: '', address:'', state:'', city:'',zip:'' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await collectData(formData);
    navigate('/'); // Redirect to home page after form submission
  };

  return (
    <form onSubmit={handleSubmit} className="p-8">
      <h1 className="text-4xl font-bold">Submit Your Information</h1>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required className="block mb-2" />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="block mb-2" />
      <input type="text" name="phoneNumber" placeholder="Phone Number" onChange={handleChange} required className="block mb-2" />
      <button type="submit" className="block w-full mt-4 bg-teal-500 text-white py-2 rounded">Submit</button>
    </form>
  );
}

export default Form;
