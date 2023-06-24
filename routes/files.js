const express = require('express');
const multer = require('multer');
const router = express.Router();
const upload = multer();
const { uploadFile } = require('../services/s3Service');

router.post('/upload', upload.single('file'), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file' });
  // Mock successful upload
  res.status(200).json({ success: true, file: req.file.originalname });
});

module.exports = router;