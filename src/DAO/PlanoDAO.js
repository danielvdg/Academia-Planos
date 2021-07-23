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
    this.bd.run(`INSERT INTO ACADEMIA(PLANO,VALOR,QUANTIDADE) VALUES (?,?,?)`,
      Object.values(newPlano),
      (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(true);
        }
      }

    );

    });

  }

  deletePlano(plano){
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

}
  
module.exports = PlanoDAO;