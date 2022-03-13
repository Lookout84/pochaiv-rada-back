const User = require("../model/user")
const Role = require('../model/role')

const findById = async (id) => {
    return await User.findById(id)
}

const findByName = async (name) => {
    return await User.findOne({ name })
}

const findByEmail = async (email) => {
    return await User.findOne({ email })
}

const create = async (body, roles) => {
    roles = await Role.findOne({ value: 'User' })
    const user = new User({ body, roles: [roles.value] })
    return await user.save()
}

const updateToken = async (id, token) => {
    return await User.updateOne({ _id: id }, { token })
}

module.exports = {
    findById,
    findByEmail,
    findByName,
    create,
    updateToken,
}
