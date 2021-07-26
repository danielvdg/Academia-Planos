
const PlanoDAO = require("../DAO/PlanoDAO");

module.exports = (app, bd,PlanoModel) => {
  let PlanoBanco = new PlanoDAO(bd);

  app.get("/planos", async (req, res) => {
    await PlanoBanco.getAllPlano()
      .then((rows) => {
        res.json({
          result: rows,
          count: rows.length,
        });
      })
      .catch((err) => {
        res.json({ err });
      });
  });

  app.get("/planos/:plano",async (req, res) => {
    let selectPlano = req.params.plano
     await PlanoBanco.getFilterPlano(selectPlano)
    .then((rows) => {
      res.json({
        result: rows,
        count: rows.length,
      });
    })
    .catch((err) => {
      res.json({ err });
    });
   
  });

  app.post("/planos", async (req, res) => {
    const { plano,valor, quantidade } = req.body;
    let newPlano = new PlanoModel(plano, valor, quantidade);
     await PlanoBanco.insertPlano(newPlano)
      .then((sucess) => {
        res.json(sucess);
      })
      .catch((err) => {
        console.log(err);
        res.json({
          message: "Erro não foi possivel inserir ",
          error: true
        });
      });
  });

  app.delete("/planos/:id", async (req, res) => {
    let idPlano = req.params.id
    await PlanoBanco.deletePlano(idPlano)    
    .then((sucess)=>res.json(sucess))
    .catch((err)=> res.json(err))
    

    
  });

  app.put("/planos/:id", (req, res) => {
    const idSet = req.params.id
    const body = req.body
    const set = [body.plano,body.valor,body.quantidade]
    PlanoBanco.putPlano(idSet,set)
    .then((sucess)=> res.json(sucess))
    .catch((err)=> {
      res.json({message:'Plano alterado com sucesso'})
      console.log(err.message );
    })

  });

};