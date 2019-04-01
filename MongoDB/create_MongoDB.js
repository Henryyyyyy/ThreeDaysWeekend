var mongo = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

var DATABASE = "restaurants"
var COLLECTION = "Indianapolis"
//Create database
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
});

//Create collection
MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("restaurants");
    dbo.createCollection("Indianapolis", function (err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});

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
MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db(DATABASE);
    var myobj = [
        {name: "Patachou", district: "Downtown", meals: ["breakfast", "lunch"], budget: "$$", styles: ["laid back", "casual", "trendy", "foodie"], audience: ["couple", "family", "group", "solo"]},
        { name: "Bluebeard", district: "Fountain Square", meals: ["dinner", "lunch"], budget: "$$", styles: ["trendy", "foodie", "popular bar"], 
            features: ["great wine", "award-winning chef", "impressive cocktails", "craft beer"], audience: ["couple", "family", "group", "solo"] }
    ];
    dbo.collection(COLLECTION).insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        console.log(res)
        db.close();
    });
});




