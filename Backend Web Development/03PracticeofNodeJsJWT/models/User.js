const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6
    },

    email: {
        type: String,
        required: true,
        max: 255
    },

    password: {
        type: String,
        required: true,
        min: 8
    },

    date: {
        type: Date,
        default: Date.now()
    }

});

const User = mongoose.model('User', userSchema);

module.exports = User;