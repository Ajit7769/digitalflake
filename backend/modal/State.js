const mongoose = require('mongoose')


const createSchema = mongoose.Schema({
   statename : {
      type : String,
   },
   statecode : {
    type : String,
   },
   status :{
    type : String,
    default : "Active"
   }
})

const createModel = mongoose.model('state' , createSchema);


module.exports =  createModel
