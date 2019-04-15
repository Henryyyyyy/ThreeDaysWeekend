var mongo = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var URL = "mongodb://localhost:27017/mydb";

var DATABASE = "restaurants"
var COLLECTION = "Indianapolis"
var MongoClient = require('mongodb').MongoClient;
var URL = "mongodb://localhost:27017/";

module.exports = {
    InsertRestaurant,
    DeleteUser,
    UpdateUserFirstName
} 

function InsertRestaurant(DbName, ColName, DocName){
    MongoClient.connect(URL, function(err, db) {
        if (err) throw err;
        var dbo = db.db(DbName);
        var myobj = { name: DocName };
        dbo.collection(ColName).insertOne(myobj, function(err, res) {
          if (err) throw err;
          console.log("1 document inserted");
          db.close();
        });
      });
}

function DeleteUser(UserName){
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";

    MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("node-mongo-registration-login-api");
    var myquery = { username: UserName };
    dbo.collection("users").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
    });
    });
}

function UpdateUserFirstName(UserName, FirstName){
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://127.0.0.1:27017/";

    MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("node-mongo-registration-login-api");
    var myquery = { username: UserName };
    var newvalues = { $set: {firstname: FirstName } };
    dbo.collection("users").updateOne(myquery, newvalues, function(err, res) {
        if (err) throw err;
        console.log("1 document updated");
        db.close();
    });
    });
}