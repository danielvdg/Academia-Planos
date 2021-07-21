class AulaDAO{
    constructor(db){
        this._db = db;
    }

    getAllAulas(){
        return Promise((resolve,reject)=>{
            this.db.all('select * from aulas',(err, rows)=>{
                if(err){
                    reject(err);

                }else{
                    resolve(rows);

                }

            });

        });

    };

    insertAula(aula){
        return new Promise ((resolve,reject)=>{
            this.db.run('insert into aulas(modalidade,horario,sala,serie,tipo) values(?,?,?,?,?)',
            Object.values(aulas), (err)=>{
                if(err){
                    reject(err);

                }else{
                    resolve(true);

                }

            });

        })
    }
};

module.exports = AulaDAO
