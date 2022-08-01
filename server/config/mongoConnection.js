const { MongoClient } = require("mongodb");

const uri = process.env.MONGOURI;

const client = new MongoClient(uri);

let db;
async function connection() {
  try {
    await client.connect();
    db = client.db("datasintesa");
  } catch (error) {
    console.log(error);
  }
}

function getDB() {
  return db;
}

module.exports = { connection, getDB };
