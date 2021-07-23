const express = require('express')
const bd = require('./Infra/sqlite-db')
//Configs
const app = express()
const port = 3000



//Import Router
const planosControllers = require('./Controllers/planosControllers')

//Import Models n DB



//Middlewares
app.use(express.json())

//Usando Rotas
planosControllers(app,bd)

app.listen(port,() =>{
    console.log(`Acessar localhost:${port}`);
    console.log(`porta iniciada`);
})