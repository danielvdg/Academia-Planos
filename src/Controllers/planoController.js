const Plano = require('../Models/Planos')
const PlanoDAO = require('../DAO/PlanoDAO')

module.exports = (app,db) => {
    let PlanoBanco = new PlanoDAO(db)
    // Listar
    app.get('/planos', function (req, res) {
       PlanoBanco.getAllPlanos()
       .then((rows)=>{
           res.json({
               result:rows,
               count:rows.length
           })
           .catch((err)=>{
               res.json({err})

           });

       }); 
       
    });

    app.get('/Planos/:modalidade?',(req,res)=>{
        let arrayFiltar = db.Plano.filter((element)=>{
            return element.modalidade === req.params.modalidade
            
        })

    });

    app.get('/',(req,res)=>{
        res.send('testando o heroku rota get')

    });

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
