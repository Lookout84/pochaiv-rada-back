const News = require('../repositories/articles')

const getAll = async (req, res, next) => {
    console.log('Hi')
    try {
        const news = await News.getAll()
        return res.json({ status: 'success', code: 200, data: { news } })
    } catch (e) {
        next(e)
    }
}

const getById = async (req, res, next) => {
    try {
        const itemNews = await Cats.getById(req.params.id)
        if (cat) {
            return res.json({ status: 'success', code: 200, data: { itemNews } })
        }
        return res.json({ status: 'error', code: 404, message: 'Not found' })
    } catch (e) {
        next(e)
    }
}

const create = async (req, res, next) => {
    try {
        const itemNews = await News.create(req.body)
        return res.status(201).json({ status: 'success', code: 201, data: { itemNews } })
    } catch (e) {
        next(e)
    }
}

const remove = async (req, res, next) => {
    try {
        const itemNews = await News.remove(req.params.id)
        if (itemNews) {
            return res.json({ status: 'success', code: 200, data: { itemNews } })
        }
        return res.json({ status: 'error', code: 404, message: 'Not found' })
    } catch (e) {
        next(e)
    }
}

const update = async (req, res, next) => {
    try {
        const itemNews = await News.update(req.params.id, req.body)
        if (itemNews) {
            return res.json({ status: 'success', code: 200, data: { itemNews } })
        }
        return res.json({ status: 'error', code: 404, message: 'Not found' })
    } catch (e) {
        next(e)
    }
}

module.exports = {
    getAll,
    getById,
    create,
    remove,
    update
}