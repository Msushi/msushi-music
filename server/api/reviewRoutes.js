const express = require('express');
const router = express.Router()
const Reviews = require('../db_schema/reviews');
const verifyAccessToken = require('./auth');



router.get('/', async (req, res) => {
    try {
        const allReviews = await Reviews.find();
        res.json(allReviews);
    } 
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/recent', async (req, res) => {
    try {
        let start = 0;
        if (req.query.start) {
            start = parseInt(req.query.start);
        }

        const recentReviews = await Reviews.find({ visible: true })
            .sort({ dateReviewed: -1 })
            .skip(start)
            .limit(15)
            .select('id name artist image');

        res.json(recentReviews);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: err.message });
    }
});

router.get('/featured', async (req, res) => {
    try {
        const featuredReviews = await Reviews.find({ visible: true })
            .sort({ dateReviewed: -1 })
            .limit(3)
            .select('id name artist image reviewHeader');
        res.json(featuredReviews);
    } catch (err) {
        console.log(err.message)
        res.status(500).json({ message: err.message });
    }
});


router.post('/', verifyAccessToken, async (req, res) => {
    const newReview = new Reviews({
        name: req.body.name,
        artist: req.body.artist,
        genre: req.body.genre,
        rating: req.body.rating,
        image: req.body.image,
        releaseYear: req.body.releaseYear,
        reviewer: req.body.reviewer,
        reviewHeader: req.body.reviewHeader,
        reviewContent: req.body.reviewContent
    });
    try {
        const dbResponse = await newReview.save();
        res.status(201).json(dbResponse);
    }
    catch (err) {
        console.log(err.message);
        res.status(400).json({ message: err.message });
    }
});

router.delete('/:id', getReview, async (req, res) => {
    try {
        await res.review.deleteOne();
        res.json({ message: 'Review Deleted' });
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
})

router.get('/:id', getReview, async (req, res) => {
    try {
        res.json(res.review);
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
})

async function getReview(req, res, next) {
    let review;
    try {
        review = await Reviews.findById(req.params.id);
        if (review == null) {
            return res.status(404).json({ message: 'Review not found' });
        }
    }   
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.review = review;
    next();
}

module.exports = router;