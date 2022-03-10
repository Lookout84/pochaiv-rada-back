const db = require('./db')
const { ObjectId } = require('mongodb')

const getNewsCollection = async (db, name) => {
  const client = await db
  const collection = await client.db().collection(name)
  return collection
}

const getAll = async () => {
  const collection = await getNewsCollection(db, 'news')
  const results = await collection.find({}).toArray()
  return results
}

const getById = async (id) => {
  const collection = await getNewsCollection(db, 'news')
  const objId = new ObjectId(id)
  const [result] = await collection.find({ _id: objId }).toArray()
  return result
}

const remove = async (id) => {
  const collection = await getNewsCollection(db, 'news')
  const objId = new ObjectId(id)
  const result = await collection.findOneAndDelete({ _id: objId })
  return result
}

const create = async (body) => {
  const collection = await getNewsCollection(db, 'news')
  const record = {
    ...body,
    ...(body.isFavorite ? {} : { isFavorite: false }),
  }
  const { news: [result] } = await collection.insertOne(record)
  return result
}

const update = async (id, body) => {
  const collection = await getNewsCollection(db, 'news')
  const objId = new ObjectId(id)
  const result = await collection.findOneAndUpdate({ _id: objId }, { $set: body }, { returnOriginal: false })
  return result
}

module.exports = {
  getAll,
  getById,
  remove,
  create,
  update,
}
