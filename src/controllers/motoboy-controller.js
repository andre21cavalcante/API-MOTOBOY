const motoboyController = (app)=>{
    app.get("/motoboy", (req, res)=>{

       //Resposta com o retorno daquilo que eu busquei 
       res.json({
           "motoboy": [],
    })
})

    app.post("/motoboy",(req, res)=>{

        // Resposta com o retorno do processo
        res.json({
            "msg": "Motoboy inserido com sucesso"
        })
    })

}
export default motoboyController