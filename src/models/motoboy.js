import MotoboyDAO from "../DAO/motoboyDAO";
import MotoboySchema from "./schema/MotoboySchema";

class Motoboy{
    constructor(db){
        this.dao = new MotoboyDAO(db)
    }

    pegaTodosMotoboy = async()=>{
        try{
            return await this.dao.pegaTodosMotoboy()
        }catch (error){
            throw new Error (erro.mensagem)
        }
    }

    pegaUmMotoboy = async(contato)=>{
        try{
            return await this.dao.pegaUmMotoboy(contato)
        }catch(error){
            return{
                "mensagem": error.mensagem,
                "erro": true
            }
        }
    }
    insereMotoboy = async (motoboy)=>{
        try {
            const novoMotoboy = new MotoboySchema(motoboy.nome, motoboy.moto, motoboy.contato, motoboy.pedido)
            return await this.dao.insereMotoboy(novoMotoboy)
        } catch (error) {
            throw new Error(error.mensagem)
        }
    }

    deletaMotoboy = async (id)=>{
        try {
            
            await this._verificaMotoboy(id)
            
            return await this.dao.deletaMotoboy(id)
        } catch (error) {
            return {
                "mensagem": error.message,
                "erro" : true
            }
        }
    }

    atualizaMotoboy = async (id, Motoboy)=>{
        try {
            await this._verificaMotoboy(id)

            // utiliza a classe para validação dos dados recebidos
            const motoboyAtualizado = new MotoboySchema(motoboy.nome, motoboy.moto, motoboy.contato, motoboy.pedido)

            return await this.dao.atualizaMotoboy(id, motoboyAtualizado)
        } catch (error) {
            return ({
                "mensagem": error.message,
                "erro" : true
            })
        }
    }

    // Podemos criar um metodo privado que verifica se o dado existe!!
    _verificaMotoboy = async (id)=>{
        const resposta = await this.dao.pegaUmMotoboyId(id)
        if(resposta.motoboy.length === 0){
            throw new Error(`Motoboy de id ${id} não existe`)
        }
    }
}

export default Motoboy
