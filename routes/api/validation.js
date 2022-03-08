const Joi = require('joi')

const schemaCreateNews = Joi.object({
    author: Joi.string().alphanum().min(3).max(30).required(),
    name: Joi.string().alphanum().min(3).max(30).required(),
    text: Joi.string().alphanum().min(3).required(),
    data: Joi.date(),
    icon: Joi.string().alphanum().min(3).max(100).required(),
    isFavorite: Joi.boolean().optional(),
})

const schemaUpdateNews = Joi.object({
    author: Joi.string().alphanum().min(3).max(30).required(),
    name: Joi.string().alphanum().min(3).max(30).required(),
    text: Joi.string().alphanum().min(3).required(),
    data: Joi.date(),
    icon: Joi.string().alphanum().min(3).max(100).required(),
    isFavorite: Joi.boolean().optional(),
}).or('author', 'name', 'text', 'data', 'icon', 'isFavorite')

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
}
