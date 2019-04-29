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
    UpdateUserFirstName,
    generateRest
} 
console.log(generateRest());

UpdateRestaurant(["solo", "family", "significant othe", "Significant Othe", "friend", "group", "family"])
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

function UpdateRestaurant(updateValue){
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://127.0.0.1:27017/";

    MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("restaurants");
    var myquery = {};
    var newvalues = { $set: {audience: updateValue } };
    dbo.collection(COLLECTION).updateMany(myquery, newvalues, function(err, res) {
        if (err) throw err;
        console.log("1 document updated");
        db.close();
    });
    });
}
function generateRest(){
    var myobj = [
        {name: "Tinker Street", district: "Herron Morton", meals: ["dinner"], budget: "$$", styles: ["trendy", "popular bar", "foodie"], 
        features: ["great wine", "award-winning chef", "reservations", "craft beer"], audience: ["couple", "family", "group", "solo"]},
        
        {name: "The Eagle", district: "Mass Ave", meals: ["dinner", "lunch"], budget: "$", styles: ["trendy", "popular bar", "foodie"], 
        features: ["patio seating", "craft beer"]},
        
        {name: "Bakersfield", district: "Mass Ave", meals: ["dinner", "lunch"], budget: "$", styles: ["trendy", "popular bar", "foodie"], 
        features: ["patio seating", "craft beer"]},

        {name: "Wildwood Market", district: "Fountain Square", meals: ["lunch"], budget: "$", styles: ["grab & go", "casual", "local favorite"], 
        features: ["patio seating"]},

        {name: "Union 50", district: "Mass Ave", meals: ["dinner"], budget: "$$", styles: ["trendy", "popular bar", "foodie"], 
        features: ["great wine", "impressive cocktails", "reservations", "craft beer"]},

        {name: "Livery", district: "Mass Ave", meals: ["dinner"], budget: "$$", styles: ["trendy", "popular bar", "foodie", "casual"], 
        features: ["great wine", "impressive cocktails", "patio seating", "craft beer"]},

        {name: "St. Elmos", district: "Downtown", meals: ["dinner"], budget: "$$$", styles: ["fine dining", "intimate"], 
        features: ["great wine", "impressive cocktails", "reservations", "craft beer"]},

        {name: "Vida", district: "Mass Ave", meals: ["dinner"], budget: "$$$", styles: ["fine dining", "popular bar", "initimate"], 
        features: ["great wine", "impressive cocktails", "reservations", "craft beer"]},

        {name: "Napolese", district: "Downtown", meals: ["dinner"], budget: "$$", styles: ["casual", "initimate"], 
        features: ["great wine", "craft beer"]},

        {name: "Subito", district: "Downtown", meals: ["lunch"], budget: "$", styles: ["casual", "grab & go"]},

        {name: "Bru Burger", district: "Mass Ave", meals: ["dinner", "lunch"], budget: "$$", styles: ["trendy", "popular bar", "foodie", "casual"], 
        features: ["impressive cocktails", "craft beer"]},

        {name: "Ali'l Poke", district: "Downtown", meals: ["lunch"], budget: "$", styles: ["casual", "grab & go"]},
        
    ];
    res = [];
    for (i = 0; i < 3; i++){
        var rand = myobj[Math.floor(Math.random() * myobj.length)];
        res.push(rand);
    }
    return res;
}