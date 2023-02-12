//set up the router
const express = require('express')
const router = express.Router()

//GET all 
router.get('/', (req, res) => {
    res.json({mssg: "GET everything"})
})

//GET a single one
router.get('/:id', (req, res) => {
    res.json({mssg: "GET one"})
})

//POST a single one
router.post('/', (req, res) => {
    res.json({mssg: "POST a new one"})
})

//DELETE one
router.delete('/:id', (req, res) => {
    res.json({mssg: "DELETE one"})
})

//UPDATE one
router.patch('/:id', (req, res) => {
    res.json({mssg: "UPDATE one"})
})

//export the router
module.exports = router 
