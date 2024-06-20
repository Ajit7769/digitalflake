const mongoose = require('mongoose')

const db_URL = 'mongodb://localhost:27017/digitalflake'

const db_Connection = () =>{
    mongoose.connect(db_URL)
  .then(() => {console.log("database is Connected")}).then((err) =>{
   console.log(err)
})
}

db_Connection();

exports.db_Connection;