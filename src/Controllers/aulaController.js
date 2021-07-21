const Aula = require('../Models/Aulas')
const AulaDAO = require('../DAO/AulaDAO')

module.exports = (app,db) => {
    let aulaBanco = new AulaDAO(db)
    // Listar
    app.get('/aula', function (req, res) {
       aulaBanco.getAllAulas()
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

    app.get('/aulas/:modalidade?',(req,res)=>{
        let arrayFiltar = db.aula.filter((element)=>{
            return element.modalidade === req.params.modalidade
            
        })

    });

    app.post('/',(req,res) =>{ 
      
        res.json({
          message: "Usuario criado com sucesso",
          error: false,
        });
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
