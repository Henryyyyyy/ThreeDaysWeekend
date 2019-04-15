class itinerary{
    constructor(){
        this.city = null
        this.gender = null
        this.age = null
        this.traveller = null
        this.fav_things = []
        this.fav_rest_type = []
        this.fav_rest_feat = []
        this.fav_night = []
    }

    setCity(str){
        this.city = str
    }
    setAge(int) {
        this.age = int
    }
    setGender(str) {
        this.gender = str
    }
    setTraveller(str) {
        this.traveller = str
    }
    
    setFavThings(arr) {
        this.fav_things = arr
    }
    setFavRestType(arr) {
        this.fav_rest_type = arr
    }
    setFavRestFeat(arr) {
        this.fav_rest_feat = arr
    } 
    setFavNight(arr) {
        this.fav_night = arr
    }

}