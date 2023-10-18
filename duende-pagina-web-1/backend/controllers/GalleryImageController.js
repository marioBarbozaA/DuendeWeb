const SingletonDAO = require('./Singleton.js');


const addGalleryImage = async (req, res, next) => {
    await Singleton.addGalleryImage(req, res, next);
  };
  
  const updateGalleryImage = async (req, res, next) => {
    await Singleton.updateGalleryImage(req, res, next);
  };
  
  const deleteGalleryImage = async (req, res, next) => {
    await Singleton.deleteGalleryImage(req, res, next);
  };
  
  const getGalleryImageByID = async (req, res, next) => {
    await Singleton.getGalleryImageByID(req, res, next);
  };
  
  const getGalleryImagesByCategory = async (req, res, next) => {
    await Singleton.getGalleryImagesByCategory(req, res, next);
  };
  
  const getAllImages = async (req, res, next) => {
    await Singleton.getAllImages(req, res, next);
  };
  
  module.exports = {
    addGalleryImage,
    updateGalleryImage,
    deleteGalleryImage,
    getGalleryImageByID,
    getGalleryImagesByCategory,
    getAllImages,
  };
  