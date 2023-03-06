const express = require("express")

const app = express()

app.get("/", function (req,res) {
    
    res.status(200).send("Aquest request/response està OK")

})

app.get("/products", function (req,res) {
    
    res.status(500).send("Hi ha un error amb el servidor")

})

app.get("/users", function (req,res) {
    
    res.status(404).send("404 no trobat")

})

app.listen(3000)