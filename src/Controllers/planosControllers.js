const Plano = require("../Models/Plano");
const PlanoDAO = require("../DAO/PlanoDAO");
module.exports = (app, bd) => {
  let PlanoBanco = new PlanoDAO(bd);

  app.get("/planos", (req, res) => {
    PlanoBanco
      .getAllPlano()
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

  app.get("/planos/:plano", (req, res) => {
    let selectPlano = req.params.plano
    PlanoBanco
    .getFilterPlano(selectPlano)
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

  app.post("/planos", (req, res) => {
    const { plano, valor, quantidade } = req.body;
    let newPlano = new Plano(plano, valor, quantidade);
    PlanoBanco
      .insertPlano(newPlano)
      .then(() => {
        res.status(201).json({
          message: "Plano inserido com sucesso",
          error: false,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          message: "Erro não foi possivel inserir ",
          error: true,
        });
      });
  });

//   app.delete("/users/:email", (req, res) => {
//     let countArray = db.users.length;

//     db.users = db.users.filter((element) => {
//       return element.email !== req.params.email;
//     });

//     if (countArray === db.users.length) {
//       res.json({
//         message: `não existe usuario com esse email ${req.params.email}`,
//         error: true,
//       });
//     } else {
//       res.json({
//         message: `Usuario com o email: ${req.params.email} deletado com sucesso`,
//         error: false,
//       });
//     }
//   });

//   app.put("/users/:email", (req, res) => {
//     const { nome, email, senha } = req.body;
//     var varQnt = 0;
//     if (nome || email || senha) {
//       db.users.forEach((element) => {
//         if (element.email === req.params.email) {
//           if (nome) {
//             element["nome"] = nome;
//           }
//           if (email) {
//             element["email"] = email;
//           }
//           if (senha) {
//             element["senha"] = senha;
//           }
//           varQnt++;
//         }
//       });
//       if (!varQnt) {
//         res.json({
//           message: "Não existe nenhum usuario com esse email",
//           error: true,
//         });
//       } else {
//         res.json({
//           message: `Usuarios com email ${req.params.email} alterado`,
//           error: false,
//           count: varQnt,
//         });
//       }
//     } else {
//       res.json({
//         message:
//           "Não foi possivel atualizar o usuario, nenhum campo valido foi passado ( Esperado {nome,email,senha} )",
//         error: true,
//       });
//     }
//   });
};