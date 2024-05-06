const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
    reviewID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    userIP: {
        type: String,
        required: true
    }
});

ratingSchema.index({ reviewId: 1, userId: 1 }, { unique: true });

module.exports = mongoose.model("Ratings", ratingSchema);