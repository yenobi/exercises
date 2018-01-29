const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'chat';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  console.log("Connected successfully to server");

// connect to db
  const db = client.db(dbName);
  console.log(db);

    const collection = db.collection('documents');
    // Insert some documents
    collection.insertMany([
      {a : 1}, {a : 2}, {a : 3}
    ], function(err, result) {
      assert.equal(err, null);
      assert.equal(3, result.result.n);
      assert.equal(3, result.ops.length);
      console.log("Inserted 3 documents into the collection");
    //   callback(result);
    });

  client.close();
});

// const insertDocuments = function(db, callback) {
//     // Get the documents collection
//     const collection = db.collection('documents');
//     // Insert some documents
//     collection.insertMany([
//       {a : 1}, {a : 2}, {a : 3}
//     ], function(err, result) {
//       assert.equal(err, null);
//       assert.equal(3, result.result.n);
//       assert.equal(3, result.ops.length);
//       console.log("Inserted 3 documents into the collection");
//       callback(result);
//     });
//   }