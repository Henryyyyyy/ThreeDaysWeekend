module.exports = {
    generateRest
} 
console.log(generateRest());

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
    let res = [];
    var i;
    for (i = 0; i < 3; i++){
        var rand = myobj[Math.floor(Math.random() * myobj.length)];
        res.push(rand);
    }
    return res;
}