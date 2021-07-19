// imports do module
const express = require('express')
const app = express()

const port = 3000

// imports controllers
const aulaController = require('./Controllers/aulaController')

// midlleware


// Usando as rotas
aulaController(app)

// booting port
app.listen(port,() =>{
console.log(`acessar:http://localhost:${port}`);
})
