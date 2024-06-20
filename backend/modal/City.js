const mongoose = require('mongoose')

const citySchema = mongoose.Schema({
    cityname :{
        type : String
    },
    citycode : {
        type : String
    },
    state : {
        type : String , 
    },
    status :{
        type : String,
        default : "Active"
    }
})

const cityModel = mongoose.model('city' , citySchema)

module.exports = cityModel;