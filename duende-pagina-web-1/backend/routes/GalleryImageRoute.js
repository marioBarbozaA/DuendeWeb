const express = require('express');
const router = express.Router();
const Gallery = require('./../controllers/GalleryImageController.js');




router.route('/create')
    post(Gallery.addGalleryImage); 

router.route('/update')
    post(Gallery.updateGalleryImage);

router.route('/delete')
    .post(deleteGalleryImage);

router.route('/getGalleryImageByID')
    .get(getGalleryImageByID);

router.route('/getGalleryImagesByCategory')
    .get(getGalleryImagesByCategory);

router.route('/getAllImages')
    .get(getAllImages);

module.exports = router;