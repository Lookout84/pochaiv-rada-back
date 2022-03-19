const Joi = require('joi')
const mongoose = require('mongoose')

const schemaCreateNews = Joi.object({
    title: Joi.string().min(3).max(30).required(),
    author: Joi.string().min(3).max(30).required(),
    body: Joi.string().min(3).required(),
    date: Joi.date(),
    icon: Joi.string().min(3).max(100).required(),
    isFavorite: Joi.boolean().optional(),
})

const schemaUpdateNews = Joi.object({
    title: Joi.string().min(3).max(30).required(),
    author: Joi.string().min(3).max(30).required(),
    body: Joi.string().min(3).required(),
    date: Joi.date(),
    icon: Joi.string().min(3).max(100).required(),
    isFavorite: Joi.boolean().optional(),
}).or('title', 'author', 'body', 'date', 'icon', 'isFavorite')

const schemaUpdateStatusNews = Joi.object({
    isFavorite: Joi.boolean().required(),
})

const validate = async (schema, obj, next) => {
    try {
        await schema.validateAsync(obj)
        next()
    } catch (err) {
        next({
            status: 400,
            message: err.message.replace(/"/g, ''),
        })
    }
}

module.exports = {
    validationCreateNews: (req, res, next) => {
        return validate(schemaCreateNews, req.body, next)
    },
    validationUpdateNews: (req, res, next) => {
        return validate(schemaUpdateNews, req.body, next)
    },
    validationUpdateStatusNews: (req, res, next) => {
        return validate(schemaUpdateStatusNews, req.body, next)
    },
    validateMongoId: (req, res, next) => {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            next({
                status: 400,
                message: 'Invalid ObjectId',
            })
        } next()
    },
}
