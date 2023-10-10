const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: String,
    password: { type: String, required: true },
    type: String,
    status: String
});

module.exports = mongoose.model('User', userSchema);

