const express = require('express')
const http = require('http')

// Creating server
const app = express()

// Actions
// Root
app.get('/', function (req, res) {
    res.send('Welcome to Alex\'s site')
})

// Productes
app.get('/Productes', function (req, res) {
    res.send('Llistat de productes')
})

app.put('/Productes', function (req, res) {
    res.send('Actualitzar un producte')
})

app.post('/Productes', function (req, res) {
    res.send('Crear un producte')
})

app.delete('/Productes', function (req, res) {
    res.send('Esborrar un producte')
})

// Users
app.get('/Usuaris', function (req, res) {
    res.send('Llistat d\'usuaris')
})

app.put('/Usuaris', function (req, res) {
    res.send('Actualitzar un usuari')
})

app.post('/Usuaris', function (req, res) {
    res.send('Crear un usuari')
})

app.delete('/Usuaris', function (req, res) {
    res.send('Esborrar un usuari')
})

app.listen(3000)