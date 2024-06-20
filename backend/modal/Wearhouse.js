const mongoose = require('mongoose')

const wearhouseSchema = mongoose.Schema({
    wearhousename :{
        type : String
    },
    city : {
        type : String
    },
    state : {
        type : String
    },
    status :{
        type : String,
        default : "Active"
    }
})

const wearhouseModel = mongoose.model('wearhouse', wearhouseSchema)

module.exports = wearhouseModel ;