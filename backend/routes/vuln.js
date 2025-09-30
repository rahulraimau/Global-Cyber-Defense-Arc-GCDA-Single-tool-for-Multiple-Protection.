const express = require('express');
const router = express.Router();
const Vulnerability = require('../models/Vulnerability');
const multer = require('multer');
const upload = multer({ dest: '/tmp' });

router.post('/upload', upload.single('file'), async (req, res) => {
  res.json({ ok: true, filename: req.file && req.file.originalname });
});

router.get('/list', async (req, res) => {
  const v = await Vulnerability.find().limit(500);
  res.json(v);
});

module.exports = router;
