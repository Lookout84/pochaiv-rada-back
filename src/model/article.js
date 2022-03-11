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
    {
        versionKey: false, timestamps: true,
        toJSON: {
            virtuals: true,
            transform: function (doc, ret) {
                delete ret._id
                return ret
            }
        },
        toObject: {
            virtuals: true,
            transform: function (doc, ret) {
                delete ret._id
                return ret
            }
        }
    },
)

articleSchema.virtual('info').get(function () {
    return `This is article ${title} by ${author}`
})

articleSchema.path('title').validate((value) => {
    const re = /[A-Z]\w+/g
    return re.test(String(value))
})

const Article = model('article', articleSchema)

module.exports = Article