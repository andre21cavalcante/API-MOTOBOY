import Motoboy from "../models/Motoboy.js"

const motoboyController = (app, bd)=>{
    const motoboyModel = new Motoboy(bd)

    app.get('/motoboy', async (req, res)=>{
        try {
            const resposta = await motoboyModel.pegaTodosMotoboy()
            res.status(200)
            .json({
                "motoboy" : resposta,
                "erro" : false
            })
        } catch (error) {
            res.status(400)
            .json({
                "mensagem" : error.message,
                "erro" : true
            })
        }       
    })

    app.get('/motoboy/pedido/:pedido', async (req, res)=>{
        
        const pedido = req.params.pedido

        
        res.json(await motoboyModel.pegaUmMotoboy(pedido))
    })

    app.post('/motoboy',async (req, res)=>{
        
        const body = req.body
        try {
            const resposta = await motoboyModel.insereMotoboy(body)
            res.status(201)
            .json({
                "mensagem" : resposta,
                "erro" : false
            })
        } catch (error) {
            res.status(400)
            .json({
                "mensagem" : error.message,
                "erro" : true
            })
        }
    })

    app.delete('/motoboy/id/:id', async (req, res)=>{
      
        const id = req.params.id

       
        res.json(await motoboyModel.deletaMotoboy(id))

    })

    app.put('/motoboy/id/:id', async (req, res)=>{
       
        const id = req.params.id

      
        const body = req.body

        
        res.json(await motoboyModel.atualizaMotoboy(id, body))
    })

}

export default motoboyController