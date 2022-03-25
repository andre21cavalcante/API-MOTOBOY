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
                        "motoboy": rows,
                        "erro": false
                    })
                }
            })
        })
    }

    pegaUmMotoboy = (moto)=>{
        return new Promise((resolve, reject)=>{
            this.db.all('SELECT * FROM MOTOBOYS WHERE MOTO = ?',
            moto,
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
           
            this.db.run("INSERT INTO MOTOBOYS(NOME, MOTO, CONTATO, PEDIDO ) VALUES (?, ?, ?, ?)",
                novoMotoboy.nome, novoMotoboy.moto, novoMotoboy.contato, novoMotoboy.pedido, 
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
                        "usuario": `Motoboy de id ${id} deletado com sucesso`,
                        "erro": false
                    })
                }
            })
        })
    }

    atualizaMotooby = (id, motoboy)=>{
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
                        "usuario": usuario,
                        "erro": false
                    })
                }
            })
        })
    }

}

export default MotoboyDAO