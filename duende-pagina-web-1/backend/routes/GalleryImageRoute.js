const express = require('express');
const router = express.Router();
const Gallery = require('./../controllers/GalleryImageController.js');




router.route('/create')
    .post(Gallery.addGalleryImage); 

router.route('/update')
    .put(Gallery.updateGalleryImage);

router.route('/delete')
    .post(Gallery.deleteGalleryImage);

router.route('/getGalleryImageByID')
    .get(Gallery.getGalleryImageByID);

router.route('/getGalleryImagesByCategory')
    .get(Gallery.getGalleryImagesByCategory);

router.route('/getAllImages')
    .get(Gallery.getAllImages);

module.exports = router;