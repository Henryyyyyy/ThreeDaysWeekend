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


// Create collection
MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db("restaurants");
    dbo.createCollection("Indianapolis", function (err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});

//Insert document - user
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


// //Insert documents
// MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
//     if (err) throw err;
//     var dbo = db.db(DATABASE);
//     var myobj = [
//         {name: "Patachou", district: "Downtown", meals: ["breakfast", "lunch"], budget: "$$", styles: ["laid back", "casual", "trendy", "foodie"], audience: ["couple", "family", "group", "solo"]},
//         {name: "Bluebeard", district: "Fountain Square", meals: ["dinner", "lunch"], budget: "$$", styles: ["trendy", "foodie", "popular bar"], 
//             features: ["great wine", "award-winning chef", "impressive cocktails", "craft beer"], audience: ["couple", "family", "group", "solo"] }
//     ];
//     dbo.collection(COLLECTION).insertMany(myobj, function (err, res) {
//         if (err) throw err;
//         console.log("Number of documents inserted: " + res.insertedCount);
//         console.log(res)
//         db.close();
//     });
// });

//Create Multiple entries
// MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
//     if (err) throw err;
//     var dbo = db.db(DATABASE);
//     var myobj = [
//         {name: "Tinker Street", district: "Herron Morton", meals: ["dinner"], budget: "$$", styles: ["trendy", "popular bar", "foodie"], 
//         features: ["great wine", "award-winning chef", "reservations", "craft beer"], audience: ["couple", "family", "group", "solo"]},
        
//         {name: "The Eagle", district: "Mass Ave", meals: ["dinner", "lunch"], budget: "$", styles: ["trendy", "popular bar", "foodie"], 
//         features: ["patio seating", "craft beer"]},
        
//         {name: "Bakersfield", district: "Mass Ave", meals: ["dinner", "lunch"], budget: "$", styles: ["trendy", "popular bar", "foodie"], 
//         features: ["patio seating", "craft beer"]},

//         {name: "Wildwood Market", district: "Fountain Square", meals: ["lunch"], budget: "$", styles: ["grab & go", "casual", "local favorite"], 
//         features: ["patio seating"]},

//         {name: "Union 50", district: "Mass Ave", meals: ["dinner"], budget: "$$", styles: ["trendy", "popular bar", "foodie"], 
//         features: ["great wine", "impressive cocktails", "reservations", "craft beer"]},

//         {name: "Livery", district: "Mass Ave", meals: ["dinner"], budget: "$$", styles: ["trendy", "popular bar", "foodie", "casual"], 
//         features: ["great wine", "impressive cocktails", "patio seating", "craft beer"]},

//         {name: "St. Elmos", district: "Downtown", meals: ["dinner"], budget: "$$$", styles: ["fine dining", "intimate"], 
//         features: ["great wine", "impressive cocktails", "reservations", "craft beer"]},

//         {name: "Vida", district: "Mass Ave", meals: ["dinner"], budget: "$$$", styles: ["fine dining", "popular bar", "initimate"], 
//         features: ["great wine", "impressive cocktails", "reservations", "craft beer"]},

//         {name: "Napolese", district: "Downtown", meals: ["dinner"], budget: "$$", styles: ["casual", "initimate"], 
//         features: ["great wine", "craft beer"]},

//         {name: "Subito", district: "Downtown", meals: ["lunch"], budget: "$", styles: ["casual", "grab & go"]},

//         {name: "Bru Burger", district: "Mass Ave", meals: ["dinner", "lunch"], budget: "$$", styles: ["trendy", "popular bar", "foodie", "casual"], 
//         features: ["impressive cocktails", "craft beer"]},

//         {name: "Ali'l Poke", district: "Downtown", meals: ["lunch"], budget: "$", styles: ["casual", "grab & go"]},
        
//     ];
//     dbo.collection(COLLECTION).insertMany(myobj, function (err, res) {
//         if (err) throw err;
//         console.log("Number of documents inserted: " + res.insertedCount);
//         console.log(res)
//         db.close();
//     });
// });


