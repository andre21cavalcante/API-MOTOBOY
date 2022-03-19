const motoboyController = (app, bd)=>{
    app.get("/motoboy", (req, res)=>{
        //Buscando informações no banco de dados
        const todosMotoboys = bd.motoboy
       //Resposta com o retorno daquilo que eu busquei 
       res.json({
           "motoboy": todosMotoboys,
            "erro": false
    })
})

    app.post("/motoboy",(req, res)=>{
        //Recebe o corpo da requisição 
        const body = req.body

        try{
            const novoMotoboy = new Motoboy(body.nome, body.moto, body.contato, body.senha)

            //insere a instância do usuario no banco de dados
            bd.motoboy.push(novoMotoboy)
       
        // Resposta com o retorno do processo
        res.json({
            "msg": `Motoboy ${novoMotoboy.nome} inserido com sucesso`,
            "motoboy": novoMotoboy,
            "erro": false
        })
        }catch (error){
            //envia o erro, caso existe
            res.json({
                "msg": error.message,
                "erro":true
            })

        }
    })

}
export default motoboyController