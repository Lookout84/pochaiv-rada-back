const express = require('express')
const router = express.Router()
const ctrl = require('../../controllers/news')
const {
    validationCreateNews,
    validationUpdateNews,
    validationUpdateStatusNews,
} = require('./validation')

router.use((req, res, next) => {
    console.log(req.url)
    next()
})

router
    .get('/', ctrl.getAll)
    .post('/', validationCreateNews, ctrl.create)

router
    .get('/:id', ctrl.getById)
    .delete('/:id', ctrl.remove)
    .put('/:id', validationUpdateNews, ctrl.update)

router.patch('/:id/favorited', validationUpdateStatusNews, ctrl.update)

module.exports = router