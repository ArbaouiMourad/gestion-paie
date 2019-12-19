const express=require('express');
const mongoose =require('mongoose');
const app = express();
const config =require('config');
//Middleware options body-parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// connect db
require('./config/db')()

//routes Api
app.use('/info',(require('./routes/info')))


//run server
const port = process.env.PORT || 5000

app.listen(port, err => {
    if (err) 
        console.log("cannot connect to database")
    console.log(`server is running on port ${port}`)
})