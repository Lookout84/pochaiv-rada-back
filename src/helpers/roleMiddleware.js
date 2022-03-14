
const { HttpCode } = require('./constants')
const jwt = require('jsonwebtoken')
const SECRET_KEY = process.env.SECRET_KEY

module.exports = function (req, res, next) {
    if (req.method === 'OPTIONS') {
        next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
            return res.status(HttpCode.FORBIDDEN)
                .json({ message: 'Користувач не авторизований' })
        }
        const decodeData = jwt.verify(token, SECRET_KEY)
        req.user = decodeData
        next()
    } catch (error) {
        console.log(error)
        return res.status(HttpCode.FORBIDDEN)
            .json({ message: 'Користувач не авторизований' })
    }
}