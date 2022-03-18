const Article = require('../repositories/articles')
const { HttpCode } = require('../helpers/constants')

const getAll = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const { docs: articles, ...rest } = await Article.getAllArticles(
            userId
        )
        console.log(articles);
        articles.sort(function (a, b) {
            return new Date(b.date).getTime() - new Date(a.date).getTime()
        })
        return res.json({
            status: 'success',
            code: HttpCode.OK,
            data: { articles, ...rest },
        });
    } catch (error) {
        next(error)
    }
}

const create = async (req, res, next) => {
    try {
        const userId = req.user.id
        console.log(req.body)
        const article = await Article.addArticle(userId, req.body)
        console.log(article.title)
        if (article) {
            const articles = await Article.getAllArticles(userId)
            articles.sort(function (a, b) {
                return new Date(b.date).getTime() - new Date(a.date).getTime()
            })
            return res
                .status(HttpCode.CREATED)
                .json({
                    status: 'success', code: HttpCode.CREATED, ...articles
                })
        }
        console.log(aricles);
        return res.status(HttpCode.BAD_REQUEST).json({
            status: 'error',
            code: HttpCode.BAD_REQUEST,
            message: 'missing required name field',
        });
    } catch (error) {
        next(error)
    }
}

const getById = async (req, res, next) => {
    try {
        const itemNews = await Article.getById(req.params.id)
        if (cat) {
            return res.json({ status: 'success', code: 200, data: { itemNews } })
        }
        return res.json({ status: 'error', code: 404, message: 'Not found' })
    } catch (e) {
        next(e)
    }
}


const remove = async (req, res, next) => {
    try {
        const itemNews = await Article.remove(req.params.id)
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
        const itemNews = await Article.update(req.params.id, req.body)
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