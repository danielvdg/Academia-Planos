
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
        res.status(201).json(sucess);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          message: "Erro não foi possivel inserir ",
          error: true
        });
      });
  });

  app.delete("/planos/:id", async (req, res) => {
    let idPlano = req.params.id
    await PlanoBanco.deletePlano(idPlano)    
    .then((sucess)=>res.status(200).json(sucess))
    .catch((err)=> res.status(500).json(err))
    

    
  });

  // app.put("/planos/:plano", (req, res) => {
  //   const { plano, valor, quantidade } = req.body;
  //   var varQnt = 0;
  //   if (plano || valor || quantidade) {
  //     db.users.forEach((element) => {
  //       if (element.email === req.params.email) {
  //         if (nome) {
  //           element["nome"] = nome;
  //         }
  //         if (email) {
  //           element["email"] = email;
  //         }
  //         if (senha) {
  //           element["senha"] = senha;
  //         }
  //         varQnt++;
  //       }
  //     });
  //     if (!varQnt) {
  //       res.json({
  //         message: "Não existe nenhum usuario com esse email",
  //         error: true,
  //       });
  //     } else {
  //       res.json({
  //         message: `Usuarios com email ${req.params.email} alterado`,
  //         error: false,
  //         count: varQnt,
  //       });
  //     }
  //   } else {
  //     res.json({
  //       message:
  //         "Não foi possivel atualizar o usuario, nenhum campo valido foi passado ( Esperado {nome,email,senha} )",
  //       error: true,
  //     });
  //   }
  // });
};