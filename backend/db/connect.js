const dotenv = require('dotenv');
dotenv.config();
const MongoClient = require('mongodb').MongoClient;
// const mongoose = require('mongoose');


let _db;
let test;
let result;

const initDb = async function (callback) {
  if (_db) {
    console.log('Db is already initialized!');
    return callback(null, _db);
  }
  await MongoClient.connect(process.env.MONGODB_URI)
    .then((client) => {
      _db = client;
      callback(null, _db);
    })
    .catch((err) => {
      callback(err);
    });
};

const getDb = async function () {
  if (!_db) {
    throw Error('Db not initialized');
  }
  return _db;
};

module.exports = {
  initDb,
  getDb,
};