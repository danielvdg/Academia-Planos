const express = require('express')
const bd = require('./Infra/sqlite-db')
//Configs
const app = express()
const port = 3000 || process.env.PORT;



//Import Router
const planosControllers = require('./Controllers/planosControllers.js')

//Import Models n DB
const PlanoModel = require("./Models/Plano.js");



//Middlewares
app.use(express.json())

//Usando Rotas
planosControllers(app,bd,PlanoModel)

app.listen(port ,() =>{
    console.log(`Acessar localhost:${port}`);
    console.log(`porta iniciada`);
})