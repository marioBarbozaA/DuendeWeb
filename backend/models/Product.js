const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    price: Number,
    stock: Number,
    images: [String],
    mainImage: String,
    status: Boolean,
    category: String
});

module.exports = mongoose.model('Product', productSchema);
