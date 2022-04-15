const { Session, Author, Variation } = require('../../models')
const { query } = require('express')

const getAllSessions = async () => {
    const result = await Session.find()
    return result
}