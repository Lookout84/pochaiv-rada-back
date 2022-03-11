const express = require('express')
const router = express.Router()
const ctrl = require('../../controllers/articles')
const {
    validationCreateNews,
    validationUpdateNews,
    validationUpdateStatusNews,
    validateMongoId
} = require('../users/validation')

router.use((req, res, next) => {
    console.log(req.url)
    next()
})

router
    .get('/', ctrl.getAll)
    .post('/', validationCreateNews, ctrl.create)

router
    .get('/:id', validateMongoId, ctrl.getById)
    .delete('/:id', validateMongoId, ctrl.remove)
    .put('/:id', validateMongoId, validationUpdateNews, ctrl.update)

router.patch('/:id/favorited', validateMongoId, validationUpdateStatusNews, ctrl.update)

module.exports = router