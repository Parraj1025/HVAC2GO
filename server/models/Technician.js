const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const technicianSchema = new Schema({
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, reuqire: true },
    services: { type: String},
});

module.exports = mongoose.model('Technician', technicianSchema)