const mongoose = require("mongoose");
const dbname = process.env.DB 
const mongoURI = process.env.MONGODB_URI

mongoose.connect(`${mongoURI}/${dbname}`)
.then(()=>{
    console.log(`Established a connection to the database ${dbname}`)})
.catch(err=>{
  console.log("Something Went wrong when connecting to the DB ", err)
})