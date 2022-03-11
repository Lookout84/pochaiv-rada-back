const Article = require('../model/article')

const getAll = async () => {
  const results = await Article.find()
  return results
}

const getById = async (id) => {
  const result = await Article.findOne({ _id: id })
  return result
}

const remove = async (id) => {
  const result = await Article.findOneAndRemove({ _id: id })
  return result
}

const create = async (body) => {
  const result = await Article.create(body)
  return result
}

const update = async (id, body) => {
  const result = await Article.findOneAndUpdate(
    { _id: id },
    { ...body },
    { new: true })
  return result
}


module.exports = {
  getAll,
  getById,
  remove,
  create,
  update,
}
