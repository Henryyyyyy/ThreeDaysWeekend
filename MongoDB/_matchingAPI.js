var mongo = require('mongodb');

var MongoClient = require('mongodb').MongoClient;

var DATABASE = "restaurants"
var COLLECTION = "Indianapolis"
var URL = "mongodb://localhost:27017/";

module.exports = {
    InsertRestaurant,
    MatchRestaurants
} 

MatchRestaurants(["male", "12", "solo", "whatever", "trendy", "award-winning chef", "get fucking lit"])

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

function MatchRestaurants(pref){
    MongoClient.connect(URL, function(err, db) {
        if (err) throw err;
        
        //translate input
        if (pref.length < 7) {
            console.log("ERROR: Preference list not complete")
            return
        }
        let audience = pref[2];
        let style = pref[4];
        let feature = pref[5];

        //search breakfast
        var dbo = db.db("restaurants");
        let matchedList = []

        query_audience = {meals: "breakfast", audience: audience};
        var res = dbo.collection(COLLECTION).find(query_audience).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
            return result;
        });

        console.log(res);
        
        
      });
    

}