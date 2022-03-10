const express = require('express')
const router = express.Router()
const News = require('../../model/news')
const {
    validationCreateNews,
    validationUpdateNews,
    validationUpdateStatusNews,
} = require('./validation')

router.use((req, res, next) => {
    console.log(req.url)
    next()
})

router.get('/', async (req, res, next) => {
    console.log('Hi')
    try {
        const news = await News.getAll()
        return res.json({ status: 'success', code: 200, data: { news } })
    } catch (e) {
        next(e)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const itemNews = await Cats.getById(req.params.id)
        if (cat) {
            return res.json({ status: 'success', code: 200, data: { itemNews } })
        }
        return res.json({ status: 'error', code: 404, message: 'Not found' })
    } catch (e) {
        next(e)
    }
})

router.post('/', validationCreateNews, async (req, res, next) => {
    try {
        const itemNews = await News.create(req.body)
        return res.status(201).json({ status: 'success', code: 201, data: { itemNews } })
    } catch (e) {
        next(e)
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const itemNews = await News.remove(req.params.id)
        if (itemNews) {
            return res.json({ status: 'success', code: 200, data: { itemNews } })
        }
        return res.json({ status: 'error', code: 404, message: 'Not found' })
    } catch (e) {
        next(e)
    }
})

router.put('/:id', validationUpdateNews, async (req, res, next) => {
    try {
        const itemNews = await News.update(req.params.id, req.body)
        if (cat) {
            return res.json({ status: 'success', code: 200, data: { itemNews } })
        }
        return res.json({ status: 'error', code: 404, message: 'Not found' })
    } catch (e) {
        next(e)
    }
})

router.patch(
    '/:id/favorited',
    validationUpdateStatusNews,
    async (req, res, next) => {
        try {
            const itemNews = await News.update(req.params.id, req.body)
            if (cat) {
                return res.json({ status: 'success', code: 200, data: { itemNewsNews } })
            }
            return res.json({ status: 'error', code: 404, message: 'Not found' })
        } catch (e) {
            next(e)
        }
    },
)

module.exports = router
