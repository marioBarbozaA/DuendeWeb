const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})

const upload = multer({ storage: storage });

const updateImagePaths = (req, res, next) => {
    if (req.file) {
        req.body.mainImage = `/uploads/${req.file.filename}`;
    }
    if (req.files && Array.isArray(req.files.secondaryImages)) {
        req.body.secondaryImages = req.files.secondaryImages.map(file => `/uploads/${file.filename}`);
    }
    next();
};

module.exports = { upload, updateImagePaths };
