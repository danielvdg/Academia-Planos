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

    getFilterPlano(){
        return new Promise((resolve,reject)=>{
            this.bd.run("SELECT * FROM ACADEMIA WHERE PLANO = ? ",(err,rows)=>{
                if (err) {
                reject(err);
                } else {
                resolve(rows);
                }

            })

        })

    }
  
    insertPlano(plano) {
      return new Promise((resolve, reject) => {
        this.bd.run(
          `INSERT INTO ACADEMIA(plano,valor,quantidade) VALUES (?,?,?)`,
          Object.values(plano),
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

}
  
  module.exports = PlanoDAO;