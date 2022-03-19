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
    
    app.get("/motoboy/contato/:contato", (req, res)=>{
        //pegando parametro que sera utilizado para o filtro
        const contato = req.params.contato

        //Pesqueisa  o usuario no banco de dados
        const motoboyEncontrado = bd.motoboy.filter(motoboy=>(motoboy.contato == motoboy))

        //Retorna o usuario encontrado 
        res.json({
            "motoboy": motoboyEncontrado,
            "erro":false
        })
    })

    app.post("/motoboy",(req, res)=>{
        //Recebe o corpo da requisição 
        const body = req.body

        try{
            const novoMotoboy = new Motoboy(body.nome, body.moto, body.contato, body.pedido)

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

    app.delete("/motoboy/contato/:contato", (req, res)=>{
        //Pegando parametro que sera utilizado para o filtro
        const contato = req.params.contato

        //remove o usuário do banco de dados
        const novoDB = bd.motoboy.filter(motoboy=>(motoboy.contato !== email))
        bd.motoboy = novoDB

        //Resposta com o retorno 
        res.json({
            "msg": `Motoboy de contato ${contato} excluido com sucesso`,
            "erro": false       
        })
    })

    app.put("/motoboy/contato/:contato", (req, res)=>{
        //pegando parametro que sera utilizado para o filtro
        const contato = req.params.contato

        //pegando o corpo da requisição com as informações
        //que serão atualizados
        const body = req.body

        try {
            const motoboyAtualizado = new Motoboy (body.nome, body.moto, body.contato, body.pedido )

            //Atualiza o usuario no banco de dados
            bd.motoboy = bd.motoboy.map(motoboy => {
                if(motoboy.contato === contato){
                    return motoboyAtualizado
                }
                return motoboy
            });

            //resposta com o retorno 
            res.json({
                "msg": `Motoboy ${motoboyAtualizado.contato} atualizado com sucesso`,
                "motoboy": motoboyAtualizado,
                "erro": false
            })
        } catch (error) {
            res.json({
                "msg": error.message,
                "erro": true
            })
        }
    })

}
export default motoboyController