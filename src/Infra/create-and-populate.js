/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./src/Infra/database.db');

//==== Academia
const ACADEMIA_SCHEMA = `
CREATE TABLE IF NOT EXISTS "ACADEMIA" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "PLANO" VARCHAR(64),
    "VALOR" FLOAT,
    "QUANTIDADE" INTEGER
  );`;

const ADD_ACADEMIA_DATA = `
INSERT INTO ACADEMIA (ID, PLANO, VALOR, QUANTIDADE)
VALUES 
    (1, 'básico',69.99,3 )

`

function criaTabelaAcad() {
    db.run(ACADEMIA_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de usuários");
    });
}

function populaTabelaAcad() {
    db.run(ADD_ACADEMIA_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de usuários");
    });
}


db.serialize( ()=> {
    criaTabelaAcad();
    populaTabelaAcad();   
});