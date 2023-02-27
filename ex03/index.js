const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Benvinguts al Nodejs Server Side creat per: Alex Manzanares');
    console.log(`Servidor funcionant pel port ${3000}`);
    if (res.statusCode < 200 || res.statusCode > 300) {
        throw new Error(`No es pot aixecar el servidor en el port ${3000}`);
    }
})

app.listen(3000);