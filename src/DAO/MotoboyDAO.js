class MotoboyDAO{

    constructor(db){
        this.db = db
    }

    pegaTodosMotoboy = ()=>{
     
        return new Promise((resolve, reject)=>{
            this.db.all('SELECT * FROM MOTOBOYS', (error, rows)=>{
                if(error){
                    reject({
                        "mensagem": error.message,
                        "erro": true
                    })
                }else{
                    resolve({
                        "motoboys": rows,
                        "erro": false
                    })
                }
            })
        })
    }

    pegaUmMotoboy = (contato)=>{
        return new Promise((resolve, reject)=>{
            this.db.all('SELECT * FROM MOTOBOY WHERE CONTATO = ?',
            contato,
            (error, rows)=>{
                if(error){
                    reject({
                        "mensagem": error.message,
                        "erro": true
                    })
                }else{
                    resolve({
                        "motoboy": rows,
                        "erro": false
                    })
                }
            })
        })

    }

    insereMotoboy = (novoMotoboy) =>{

        return new Promise((resolve, reject)=>{
           
            this.db.run("INSERT INTO MOTOBOY(NOME, MOTO, CONTATO, PEDIDO) VALUES (?, ?, ?, ?)",
                novoMotoboy.nome, novoMotoboy.moto, novoMotoboy.senha, novoMotoboy.pedido,
                (error)=>{
                if(error){
                    reject({
                        "mensagem": error.message,
                        "erro": true
                    })
                }else{
                    resolve({
                        "mensagem": `Motoboy ${novoMotoboy.nome} inserido com sucesso`,
                        "Motoboy": novoMotoboy,
                        "erro": false
                    })
                }
            })
        })

    }

    deletaMotoboy = (id)=>{
        return new Promise((resolve, reject)=>{
            this.db.run('DELETE FROM MOTOBOYS WHERE ID = ?',
            id,
            (error)=>{
                if(error){
                    reject({
                        "mensagem": error.message,
                        "erro": true
                    })
                }else{
                    resolve({
                        "motoboy": `Motoboy de id ${id} deletado com sucesso`,
                        "erro": false
                    })
                }
            })
        })
    }

    atualizaMotoboy = (id, motoboy)=>{
        return new Promise((resolve, reject)=>{
            this.db.run('UPDATE MOTOBOYS SET NOME = ?, MOTO = ?, CONTATO = ? WHERE ID = ?, PEDIDO = ?',
            motoboy.nome, motoboy.moto, motoboy.contato, motoboy.pedido,
            id,
            (error)=>{
                if(error){
                    reject({
                        "mensagem": error.message,
                        "erro": true
                    })
                }else{
                    resolve({
                        "mensagem": `Motoboy de id ${id} atualizado com sucesso`,
                        "motoboy": motoboy,
                        "erro": false
                    })
                }
            })
        })
    }

}

export default MotoboyDAO