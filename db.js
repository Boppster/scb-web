const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";
const col = "living-expense";
const option = { useNewUrlParser: true };


// exports.connect = () => {
//   MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("scbDb");
//
//     const collection = db.collection('dogs')
//     var myobj = { name: "Company Inc", address: "Highway 37" };
//     dbo.collection("customers").insertOne(myobj, function(err, res) {
//       if (err) throw err;
//       console.log("1 document inserted");
//       db.close();
//     });
//   });
// }
//
// exports.disconnect = () => {
//   MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("scbDb");
//
//     const collection = db.collection('dogs')
//     var myobj = { name: "Company Inc", address: "Highway 37" };
//     dbo.collection("customers").insertOne(myobj, function(err, res) {
//       if (err) throw err;
//       console.log("1 document inserted");
//       db.close();
//     });
//   });
// }

exports.getLivingExpense = () => {
  MongoClient.connect(url, option, (err, client) => {
      if (err) {
        console.error('err', err)
        return
      }

      const db = client.db('scbDb')

      var collection = db.collection('living-expense');
      insertData(collection);
      var cursor = collection.find({name:'Tobbe'});

      cursor.forEach(function(err, doc) {

          console.log(doc);

      });

      client.close();
  });
}

exports.saveLivingExpense = (doc) => {
  MongoClient.connect(url, option, (err, client) => {
      if (err) {
        console.error('err', err)
        return
      }
      
      console.log('Insert data', doc);
      const db = client.db('scbDb')

      var collection = db.collection('living-expense');
      insertData(collection, doc);

      client.close();
  });
}

function insertData(collection, doc)
{
    collection.insertOne(doc, (err, result) => {
      console.log('err', err);
      console.log('result', result);
    });
}
