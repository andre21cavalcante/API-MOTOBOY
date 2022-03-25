import Motoboy from "../models/Motoboy.js"
import MotoboyDAO from '../DAO/MotoboyDAO.js'

const motoboyController = (app, bd)=>{
    const motoboyDAO = new MotoboyDAO(bd)

    app.get('/motoboy', (req, res)=>{
        motoboyDAO.pegaTodosMotoboy()
        .then((resposta)=>{
            res.status(200).json(resposta)
        })
        .catch((erro)=>{
            res.status(400).json(erro)
        })
    })

    app.get('/motoboy/moto/:moto', (req, res)=>{
        
        const motoboy = req.params.motoboy

        motoboyDAO.pegaUmMotoboy(moto)
        .then((resposta)=>{
            res.json(resposta)
        })
        .catch((erro)=>{
            res.json(erro)
        })
    })

    app.post('/motoboy',(req, res)=>{
        
        const body = req.body

        try {
            
            const novoMotoboy = new Motoboy(body.nome, body.moto, body.contato, body.pedido)

            motoboyDAO.insereMotoboy(novoMotoboy)
            .then((resposta)=>{
                res.status(201).json(resposta)
            })
            .catch((erro)=>{
                res.status(400).json(erro)
            })

        } catch (error) {
        
            res.status(400).json({
                "msg": error.message,
                "erro": true
            })
        }  
    })

    app.delete('/motoboy/id/:id', (req, res)=>{
        const id = req.params.id

        
        motoboyDAO.deletaMotoboy(id)
        .then((resposta)=>{
            res.json(resposta)
        })
        .catch((erro)=>{
            res.json(erro)
        })
    })

    app.put('/motoboy/id/:id', (req, res)=>{
        
        const id = req.params.id

        const body = req.body

        try {
            const motoboyAtualizado = new Usuario(body.nome, body.moto, body.contato, body.pedido)

       
            motoboyDAO.atualizaMotooby(id, motoboyAtualizado)
            .then((resposta)=>{
                res.json(resposta)
            })
            .catch((erro)=>{
                res.json(erro)
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