//Importando o framework
import express from "express";

//Importanto os controllers
import motoboyController from "./controllers/motoboy-controller"

//Instaciando/criando servidor
const app = express()
//Escolhendo a porta
const port = 3000 

//chamando os controllers 
motoboyController(app)

//abrindo o servidor na porta escolhida
app.listen(port, ()=>{
    console.log(`Servidor aberto na http://localhost:${port}/`)
})