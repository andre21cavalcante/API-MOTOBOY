import Motoboy from '../models/Motoboy.js'

const motoboyController = (app, db)=>{
    const motoboyModel = new Motoboy(db)

    app.get('/motoboy', async (req, res)=>{
        try {
            const resposta = await motoboyModel.pegaTodosMotoboys()
            res.status(200)
            .json({
                "motoboys" : resposta,
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

    app.get('/motoboy/id/:id', async (req, res)=>{
        const id = req.params.id
        try {
            const resposta = await motoboyModel.pegaUmMotoboy(id)
            res.status(200)
            .json({
                "motoboys" : resposta,
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

    app.post('/motoboy',async (req, res)=>{
        // Recebe o corpo da requisição
        const body = req.body
        try {
            const resposta = await motoboyModel.insereMotoboy(body)
            res.status(201)
            .json({
                "mensagem" : resposta,
                "motoboy": body,
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

        try {
            const resposta = await motoboyModel.deletaMotoboy(id)
            res.status(200)
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

    app.put('/motoboy/id/:id', async (req, res)=>{
        const id = req.params.id

        const body = req.body
        try {
            const resposta = await motoboyModel.atualizaMotoboy(id, body)
            res.status(200)
            .json({
                "mensagem" : resposta,
                "motoboy": body,
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

}

export default motoboyController