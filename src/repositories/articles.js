const Article = require('../model/article')
const { query } = require('express')

const getAll = async () => {
  const results = await Article.find()
  return results
}

const getAllArticles = async (userId) => {
  const result = await Article.find({
    owner: userId,
  }).populate({
    path: "owner",
    select: "_id",
  })
    .sort({ date: -1 });
  return result;
}

const getById = async (id) => {
  const result = await Article.findOne({ _id: id })
  return result
}

const remove = async (id) => {
  const result = await Article.findOneAndRemove({ _id: id })
  return result
}

const addArticle = async (userId, body) => {
  const result = await Article.create({
    owner: userId,
    body,
  })
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
  addArticle,
  update,
  getAllArticles,
}
