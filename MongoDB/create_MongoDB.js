var mongo = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

//Create database
// MongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     console.log("Database created!");
//     db.close();
// });

//Create collection
// MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     dbo.createCollection("Users", function (err, res) {
//         if (err) throw err;
//         console.log("Collection created!");
//         db.close();
//     });
// });

//Insert document
// MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     var myobj = { username: "yo", first_name: "Henry", last_name: "Yu", gender: "male"};
//     dbo.collection("Users").insertOne(myobj, function (err, res) {
//         if (err) throw err;
//         console.log("1 document inserted");
//         db.close();
//     });
// });

//Insert documents
// MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     var myobj = [
//         { username: "HTML", first_name: "Nicola", last_name: "Morris", gender: "female" },
//         { username: "CSS", first_name: "Nhu", last_name: "Do", gender: "female" },
//         { username: "MBA", first_name: "Brandon", last_name: "Scholz", gender: "male" }
//     ];
//     dbo.collection("Users").insertMany(myobj, function (err, res) {
//         if (err) throw err;
//         console.log("Number of documents inserted: " + res.insertedCount);
//         db.close();
//     });
// });



