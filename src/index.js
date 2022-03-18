import express from "express";

const app = express()
const port = 3000 

app.get("/motoboy", (req, res)=>{
    res.send("Rota get para entidade Motoboy")
})

app.listen(port, ()=>{
    console.log(`Servidor aberto na http://localhost:${port}/`)
})