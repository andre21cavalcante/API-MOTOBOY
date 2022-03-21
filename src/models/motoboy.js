import MotoboyDAO from "../DAO/MotoboyDAO.js";
import MotoboySchema from "./schema/MotoboySchema.js";

class Motoboy{
    constructor(db){
        this.dao = new MotoboyDAO(db)
    }

    pegaTodosMotoboy = async ()=>{
        try{
            return await this.dao.pegaTodosMotoboys()
        }catch (error){
            throw error
        }
    }
    pegaUmMotoboy = async(pedido)=>{
        try{
            return await this.dao.pegaUmMotoboy(pedido)
        }catch(error){
           throw error
        }
    }
    insereMotoboy = async (motoboy)=>{
        try {
            const novoMotoboy = new MotoboySchema(motoboy.nome, motoboy.moto, motoboy.contato, motoboy.pedido)
            return await this.dao.insereMotoboy(novoMotoboy)
        } catch (error) {
            throw error
        }
    }

    deletaMotoboy = async (id)=>{
        try {
            
            await this._verificaMotoboy(id)
            
            return await this.dao.deletaMotoboy(id)
        } catch (error) {
           throw error
        }
    }

    atualizaMotoboy = async (id, motoboy)=>{
        try {
            await this._verificaMotoboy(id)

           
            const motoboyAtualizado = new MotoboySchema(motoboy.nome, motoboy.moto, motoboy.contato, motoboy.pedido)

            return await this.dao.atualizaMotoboy(id, motoboyAtualizado)
        } catch (error) {
            
            throw(error)
        }
    }

    
    _verificaMotoboy = async (id)=>{
        const resposta = await this.dao.pegaUmMotoboyId(id)
        if(resposta.length === 0){
            throw new Error(`Motoboy de id ${id} não existe`)
        }
    }
}

export default Motoboy
