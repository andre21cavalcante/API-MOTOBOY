import sqlite3 from 'sqlite3'
sqlite3.verbose()
import { dirname } from'path'
import { fileURLToPath } from 'url'
const filePath = dirname(fileURLToPath(import.meta.url)) + '/database.db'


const db = new sqlite3.Database('./database.db');

const MOTOBOY_SCHEMA = `
CREATE TABLE IF NOT EXISTS 'MOTOBOYS' (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "MOTO" varchar(64),
    "CONTATO" varchar(64),
    "PEDIDO" varchar(64)
  );`;

const ADD_MOTOBOY_DATA = `
INSERT INTO MOTOBOYS (ID, NOME, MOTO, CONTATO, PEDIDO)
VALUES 
    (1, 'ANDRÉ SANTOS', 'HONDA', '219845632175', '10'),
    (2, 'JEFFERSON', 'BMW', '21954876954','12'),
    (3, 'CLEBER', 'DUCATI', '21954876321', '13'),
    (4, 'MICHAEL JACKSON', 'YAMAHA', '21986547320', '20'),
    (5, 'REGINALDO', 'HONDA','21958476321', '24')    
`

function criaTabelaMtb() {
    db.run(MOTOBOY_SCHEMA, (error)=> {
       if (error) console.log('Erro ao criar tabela de motoboy');
    });
}


function populaTabelaMtb() {
    db.run(ADD_MOTOBOY_DATA, (error)=> {
       if (error) console.log('Erro ao popular tabela de motoboy');
    });
}



db.serialize( ()=> {
    criaTabelaMtb();
    populaTabelaMtb();
    
});