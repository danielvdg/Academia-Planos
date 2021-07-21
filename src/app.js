// imports do module
const express = require('express')
const app = express()

const port = 3000

// imports controllers
const planoController = require('./Controllers/planoController')

// midleware
app.use(express.json())

// Usando as rotas
planoController(app)

// booting port
app.listen(port,() =>{
console.log(`acessar:http://localhost:${port}`);

})
