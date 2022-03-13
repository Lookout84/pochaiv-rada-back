const express = require('express')
const router = express.Router()
const ctrl = require('../../../controllers/articles')
const guard = require("../../../helpers/guard")

const {
    validationCreateNews,
    validationUpdateNews,
    validationUpdateStatusNews,
    validateMongoId
} = require('./validation')

router.use((req, res, next) => {
    console.log(req.url)
    next()
})

router
    .get('/', guard, ctrl.getAll)
    .post('/', guard, validationCreateNews, ctrl.create)

router
    .get('/:id', guard, validateMongoId, ctrl.getById)
    .delete('/:id', guard, validateMongoId, ctrl.remove)
    .put('/:id', guard, validateMongoId, validationUpdateNews, ctrl.update)

router.patch('/:id/favorited', guard, validateMongoId, validationUpdateStatusNews, ctrl.update)

module.exports = router