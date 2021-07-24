class PlanoDAO {
  constructor(bd) {
    this.bd = bd;
  }
  
  getAllPlano() {
    return new Promise((resolve, reject) => {
      this.bd.all("Select * from ACADEMIA", (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }

      });
      
    });

  }

  getFilterPlano(plano){
    return new Promise((resolve,reject)=>{
      this.bd.all("SELECT * FROM ACADEMIA WHERE PLANO = ? ",plano,(err,rows) =>{
        if (err) {
        reject(err);
        } else {
        resolve(rows);
        }

      })

    })

  }
  
  insertPlano(newPlano) {
    return new Promise((resolve, reject) => {
      console.log(newPlano);
      this.bd.run(`INSERT INTO ACADEMIA(PLANO,VALOR,QUANTIDADE) VALUES (?,?,?)`,newPlano.plano,newPlano.valor,newPlano.quantidade,(err) => {
          if (err) {
            reject(err);
          } else {
            resolve({
              message: "Plano inserido com sucesso",
              error: false
            });
          }
        }
        
      );

    });

  }

  deletePlano(idPlano){
    return new Promise((resolve,reject)=>{
      this.bd.all("DELETE FROM ACADEMIA WHERE ID = ? ",idPlano,(err) =>{
        if (err) {
        reject(err);
        } else {
        resolve({message:'plano deletado com suceeso'});
        }

      })

    })

  }

  

}
  
module.exports = PlanoDAO;