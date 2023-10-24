const express = require('express');
const router = express.Router();
const Gallery = require('./../controllers/GalleryImageController.js');




const { upload, updateImagePaths } = require('./../utilities/saveImages.js');

router.route('/create')
    .post(
        upload.fields([{ name: 'mainImage', maxCount: 1 }, { name: 'secondaryImages', maxCount: 10 }]),
        updateImagePaths,
        Gallery.addGalleryImage
    );

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

router.route('/getImagesAdmin')
    .get(Gallery.getImagesAdmin);

module.exports = router;