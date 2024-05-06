const express = require('express');
const router = express.Router();
const Ratings = require('../db_schema/ratings');

router.post('/', async (req, res) => {
    const newRating = new Ratings({
        reviewID: req.body.reviewID,
        rating: req.body.rating,
        userIP: req.body.userIP
    });
    try {
        const dbResponse = await newRating.save();
        res.status(201).json(dbResponse);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
})

module.exports = router;