//use terminal command "npm run dev" to start

//connect the .env file, express, mongoose, and the router
require('dotenv').config()
const express = require('express') 
const routes = require('./routes/students')
const mongoose = require('mongoose')


//express app
const app = express()

//MIDDLEWARE (app.use)
//checks to see if there is any data in the request, if there is it will attatch it
app.use(express.json())

//this fires every time a request comes in, just logs everything
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//get all the routes from the routes file and attatch them
app.use('/api/students',routes)

//connect to the database
mongoose.connect(process.env.MONG_URI)
    .then(() => { 

        //listen for requests 
        app.listen(process.env.PORT, () => {
            console.log("connected to db & listening on port", process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })




