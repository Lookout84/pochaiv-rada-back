const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
    text: {
        type: String,
        trim: true,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Comment = model('Comment', commentSchema);

module.exports = Comment