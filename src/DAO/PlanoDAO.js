class PlanoDAO{
    constructor(db){
        this._db = db;
    }

    getAllPlanos(){
        return Promise((resolve,reject)=>{
            this.db.all('select * from planos',(err, rows)=>{
                if(err){
                    reject(err);

                }else{
                    resolve(rows);

                }

            });

        });

    };

    insertPlanos(plano){
        return new Promise ((resolve,reject)=>{
            this.db.run('insert into plano(plano,valor,quantidade) values(?,?,?)',
            Object.values(plano), (err)=>{
                if(err){
                    reject(err);

                }else{
                    resolve(true);

                }

            });

        })
    }
};

module.exports = PlanoDAO
