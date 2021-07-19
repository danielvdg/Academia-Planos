const Aula = require('../Models/Aulas')

module.exports = (app) => {
    app.get('/',(req,res) =>{
        res.json({
            message:'funcinando rota get'

        })

    })

    app.post('/',(req,res) =>{
        res.json({
            message:'funcinando rota post'

        })

    })

    app.put('/',(req,res) =>{
        res.json({
            message:'funcinando rota put'

        })

    })

    app.delete('/',(req,res) =>{
        res.json({
            message:'funcinando rota delete'
            
        })

    })

}
