const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShowSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    venue: {
        type: String,
        required: true
    },
    venueLocation: {
        type: String,
        required: true
    },
    synopsis: {
        type: String,
        required: true
    },
    coverUrl: {
        type: String,
        required: true
    }
})