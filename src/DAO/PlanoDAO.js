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
      const query = `INSERT INTO ACADEMIA(PLANO,VALOR,QUANTIDADE) VALUES (?,?,?)`;
      this.bd.run(query,newPlano.plano,newPlano.valor,newPlano.quantidade,(err) => {
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
      const query = "DELETE FROM ACADEMIA WHERE ID = ? ";
      this.bd.all(query,idPlano,(err) =>{
        if (err) {
        reject(err);
        } else {
        resolve({message:'plano deletado com suceeso'});
        }

      })

    })

  }
  
  putPlano(id,set){
    return new Promise ((resolve,reject)=>{
      const query = "UPDATE ACADEMIA SET PLANO = ? , VALOR = ?, QUANTIDADE = ? WHERE ID = ? ";
      const paramentos = [set[0],set[1],set[2],id]
      this.bd.run(query,paramentos, (err)=>{
        if(err){
          reject(err);

        }else{
          resolve({message:'Plano atualizado com sucess'})
        }
      })
    })
  }

}
  
module.exports = PlanoDAO;