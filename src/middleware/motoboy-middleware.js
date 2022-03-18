const motoboyMiddleware = (app)=>{

    // Valida se body tem o campo senha 
    app.use("/motoboy", (req, res, next)=>{
        //Verifica se estou usando um metodo POST para fazer a validação
        if(req.method == "POST"){
            const body = req.body
            if(!body.senha)
                res.json({
                    "erro" : true,
                    "msg" : "Campo obrigatorio senha não foi enviado"
                })
                else
                    next()
        }else{
            next()
        }
    })

    //valida se o usuário pode entrar
    app.use("/motoboy", (req, res, next)=>{
        if(req.method === "POST"){
            const body = req.body
            if(body.nome === "drezada"){
                res.send("biribiri ")
            }else{
                next()
            }
        }else{
            next()
        }
    })
}

export default motoboyMiddleware