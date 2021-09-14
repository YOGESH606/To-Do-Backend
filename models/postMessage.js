const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const postSchema = new Schema({
    title: String,
    description: String,
    type: String,
    createAt: {
        type: Date,
        default: Date.now()
    }
});

const postMessage = mongoose.model('postMessage', postSchema);

module.exports = postMessage;

