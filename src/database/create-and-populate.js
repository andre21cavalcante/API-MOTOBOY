import sqlite3 from 'sqlite3'
sqlite3.verbose()
// Serve para fixar um caminho do meu database
import { dirname } from'path'
import { fileURLToPath } from 'url'
const filePath = dirname(fileURLToPath(import.meta.url)) + '/database.db'

// Criando o arquivo e/ou abrindo a "conexão" do meu database
const db = new sqlite3.Database('./database.db');

//==== Usuários
const MOTOBOY_SCHEMA = `
CREATE TABLE IF NOT EXISTS "MOTOBOYS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "MOTO" varchar(64),
    "CONTATO" varchar(64),
    "PEDIDO" varchar(64)
  );`;

const ADD_MOTOBOY_DATA = `
INSERT INTO MOTOBOYS (ID, NOME, MOTO, CONTATO, PEDIDO)
VALUES 
    (1, "ANDRÉ SANTOS", "HONDA", "123456", "10"),
    (2, "JEFFERSON", "BMW", "123456","12"),
    (3, "CLEBER", "DUCATI", "123456", "13"),
    (4, "MICHAEL JACKSON", "YAMAHA", "342564", "20"),
    (5, "REGINALDO", "HONDA","231436", "24")    
`

function criaTabelaMtb() {
    db.run(MOTOBOY_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de motoboy");
    });
}


function populaTabelaMtb() {
    db.run(ADD_MOTOBOY_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de motoboy");
    });
}



db.serialize( ()=> {
    criaTabelaMtb();
    populaTabelaMtb();
    
});