//use terminal command "npm run dev" to start

//connect the .env file, express, and the router
require('dotenv').config()
const express = require('express')
const routes = require('./routes/routes')


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
//can add something in first parameter to change the url
//ex "/api/workouts"
app.use('',routes)

//listen for requests on a specific port
app.listen(process.env.PORT, () => {
    console.log("listening on port ", process.env.PORT)
})


