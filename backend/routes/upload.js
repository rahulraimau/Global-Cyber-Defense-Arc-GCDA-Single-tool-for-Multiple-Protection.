const express = require('express');
const router = express.Router();
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../config/cloudinary');

// Setup Cloudinary Storage for Multer
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'gcda_uploads', // folder in Cloudinary
        allowed_formats: ['jpg', 'png', 'pdf']
    }
});

const parser = multer({ storage });

// Upload endpoint
router.post('/file', parser.single('file'), (req, res) => {
    try {
        return res.status(200).json({
            message: 'File uploaded successfully',
            url: req.file.path, // Cloudinary URL
        });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

module.exports = router;
