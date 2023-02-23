//use terminal command "npm run dev" to start
import express from "express"
import mysql2 from "mysql2"
import cors from 'cors'

//express app
const app = express()

//database
const db = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "mysqlserver",
    database: "cs490"
})

app.use(express.json())
app.use(cors())

//root connection 
app.get("/", (req,res)=> {
    res.json("Hi! This is the back end")
})

//connect 
app.get("/parallel", (req,res)=> {
    //create the SQL statement
    const q = "SELECT * FROM cis2012_students"
    //send it to the database
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

//connect to the backend
app.listen(8800, ()=> {
    console.log("connected to the backend!")
})

