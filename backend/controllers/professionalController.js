const mongodb = require('../db/connect');

const getData = async (req, res, next) => {
  const db = await mongodb.getDb()
  const collection = await db.db('CSE341').collection('user');
  const result = await collection.find()
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json(lists[0]); // we just need the first one (the only one)
  });
};

module.exports = { getData };