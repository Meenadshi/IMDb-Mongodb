const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    movieName: {
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    language:{
        type: Sring,
        default: 'Tamil',
        required: true
    },
    releasedYear:{
        type: Number,
        required: true
    },
    rating:{
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('movieModel',movieSchema);