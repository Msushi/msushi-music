const express = require('express')
const router = express.Router();
const Images = require('../db_schema/images');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/image/upload', upload.single('image'), async (req, res) => {
    try {
        const {originalname, buffer, mimetype} = req.file;
        const newImage = new Images({
            filename: originalname,
            data: buffer,
            contentType: mimetype
        });
        await newImage.save();
        let url = `/api/image/${newImage._id}`;
        url = 'http://localhost:3000' + url;
        res.json({ imageUrl: url });
    }
    catch (err) {
        console.log(err.message);
        res.status(500).json({ message: err.message });
    }
})

router.get('/image/:id', async (req, res) => {
    try {
      const image = await Images.findById(req.params.id);
      if (!image) {
        return res.status(404).json({ error: 'Image not found' });
      }
      res.set('Content-Type', image.contentType);
      res.send(image.data);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

module.exports = router;