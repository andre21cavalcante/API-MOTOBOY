//Importando o framework
import express from "express";

//Importanto os controllers
import motoboyController from "./controllers/motoboy-controller.js";

//Importando os middlewares 
import motoboyMiddleware from "./middleware/motoboy-middleware.js";

//banco de dados sqlite
import database from "./database/sqlite-db.js"

//Instaciando/criando servidor
const app = express()


// Middleware necessario para fazer o parser do 
//JSON recebido do body em objeto 
app.use(express.json())

//Chamada dos Middlewares especificos das rotas
motoboyMiddleware(app)

//chamando os controllers 
motoboyController(app, database)

export default app 