const express = require("express")

// Per accedir a les webs
const path = require("path")

const app = express()

// Get methods 
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname+"/webs/index.html"))
})

app.get("/products", function (req, res) {
    res.sendFile(path.join(__dirname+"/webs/products.html"))
})

app.listen(3000)