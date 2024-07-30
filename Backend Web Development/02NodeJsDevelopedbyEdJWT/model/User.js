const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 8
    },

    email: {
        type: String,
        required: true,
        max: 30
    },

    password: {
        type: String,
        required: true,
    },

    date: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('User', userSchema);