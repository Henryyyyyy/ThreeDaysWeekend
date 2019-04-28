var mongo = require('mongodb');

var MongoClient = require('mongodb').MongoClient;

var DATABASE = "restaurants"
var COLLECTION = "Indianapolis"
var URL = "mongodb://localhost:27017/";

module.exports = {
    MatchRestaurants
}

let DEBUG = false;

console.log(MatchRestaurants(["male", "12", "solo", "whatever", "trendy", "award-winning chef", "get fucking lit"], "lunch"));

function MatchRestaurants(pref, meal){
    RESULT = [""];
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
        var col = db.db("restaurants").collection(COLLECTION);
        let matchedList = [] 

        //query
        function queryCollection(collection, query, callback){
            collection.find(query).toArray(function(err, result) {
                if (err) {
                    console.log(err);
                } else if (result.length >= 0) {
                    matchedList.push(result);
                    callback();
                    db.close();
                }
            });
        }

        //search
        function wrapCallBack(callback){
            let query = {meals: meal, audience: audience};
            queryCollection(col, query, function(){
                // if (DEBUG) console.log("audience ===========");
                // if (DEBUG) console.log(matchedList);
            });
            query = {meals: meal, styles: style};
            queryCollection(col, query, function(){
                // if (DEBUG) console.log("style ===========");
                // if (DEBUG) console.log(matchedList);
            });
            query = {meals: meal, features: feature};
            queryCollection(col, query, function(){
                if (DEBUG) console.log("===========");
                if (DEBUG) console.log(matchedList);
    
                //now matchedList is complete. Rank!
                let dic = countMatches(matchedList);
                RESULT = rankMataches(dic);
                callback();
                // console.log(RESULT);
                
                //no matches
                // if (lst.length === 0): 
                });
        }
        wrapCallBack(function(){
            // console.log(RESULT);
            return RESULT;
        });
        
    });
}

//given matchedList, count each obj id occurence
function countMatches(ary){
    var dict = {};
    for (i = 0; i < ary.length; i++){
        for (j = 0; j < ary[i].length; j++){
            o = ary[i][j]["_id"];
            if (hasOwnProperty(dict,o)) dict[o] = dict[o] + 1;
            else dict[o] = 1;
        }
    }
    if (DEBUG) console.log(dict);
    return dict;
}

//return ary of three most frequent obj.
function rankMataches(dic){
    res = [];
    if (isEmpty(dic)) return res;
    for (i = 0; i < 3; i++){
        max = 0;
        obj = "";
        //loop through dic obj
        for (var key in dic) {
            if (dic.hasOwnProperty(key)) {
                if (dic[key] > max){
                    obj = key;
                    max = dic[key];
                }
            }
        }
        //end of loop
        res.push(obj);
        dic[obj] = -1;
    }

    //edge case: less than three matches
    for (i = 0; i < res.length; i++){
        if (res[i] === "") res[i] = res[0]; 
    }

    return res;
}

//check if an object has a property - helper for rankMataches
function hasOwnProperty(obj, prop) {
    var proto = obj.__proto__ || obj.constructor.prototype;
    return (prop in obj) &&
        (!(prop in proto) || proto[prop] !== obj[prop]);
}

//check if an obj is empty
function isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }

    return true;
}

 
