const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    screenName: {
        type: String,
        required: false,
        default: this.username
    }
})

module.exports = mongoose.model("Users", userSchema)