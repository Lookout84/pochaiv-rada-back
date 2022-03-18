const { Schema, model } = require('mongoose')

const roleSchema = new Schema({
    value: {
        type: String, unique: true, default: 'User'
    }
})

const Role = model("role", roleSchema)

module.exports = Role