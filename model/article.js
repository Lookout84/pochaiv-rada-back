const { Schema, model } = require('mongoose')

const articleSchema = new Schema({
    title: {
        type: String,
        min: 5,
        max: 255,
    },
    author: String,
    body: String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    isFavorite: {
        type: Boolean,
        default: false,
    },
    meta: {
        votes: Number,
        favs: Number
    }
},
    { versionKey: false, timestamps: true },
)

const Article = model('article', articleSchema)

module.exports = Article