const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    releaseYear: {
        type: Number,
        required: true
    },
    reviewer: {
        type: String,
        required: true
    },
    dateReviewed: {
        type: Date,
        required: true,
        default: Date.now
    },
    reviewHeader: {
        type: String,
        required: true
    },
    reviewContent: {
        type: String,
        required: true
    },
    visible: {
        type: Boolean,
        required: true,
        default: true
    }
})

module.exports = mongoose.model("Reviews", reviewSchema)