const motoboyController = (app)=>{
    app.get("/motoboy", (req, res)=>{
        res.send("Rota get para entidade motoboy")
    })
}

export default motoboyController