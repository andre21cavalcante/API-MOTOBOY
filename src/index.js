//Importando o framework
import express from "express";

//Importanto os controllers
import motoboyController from "./controllers/motoboy-controller";

//Importando os middlewares 
import motoboyMiddleware from "./middleware/motoboy-middleware";

//banco de dados sqlite
import database from "./database/sqlite-db.js"

//Instaciando/criando servidor
const app = express()
//Escolhendo a porta
const port = 3000 

// Middleware necessario para fazer o parser do 
//JSON recebido do body em objeto 
app.use(express.json())

//Chamada dos Middlewares especificos das rotas
motoboyMiddleware(app)

//chamando os controllers 
motoboyController(app, bd)

//abrindo o servidor na porta escolhida
app.listen(port, ()=>{
    console.log(`Servidor aberto na http://localhost:${port}/`)
})