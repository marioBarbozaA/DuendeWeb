const mongoose = require('mongoose');

const galleryImageSchema = new mongoose.Schema({
    name: String,
    category: String,
    subCategory: String,
    description: String,
    date: String,
    tags: [String],
    mainImage: String,
    images: [String],
    status: {type: Boolean, default: true} 
});

module.exports = mongoose.model('GalleryImage', galleryImageSchema);
