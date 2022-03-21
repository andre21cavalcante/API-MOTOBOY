class MotoboySchema{
    constructor(nome, moto, contato, pedido){
        this.nome = nome 
        this.moto = moto 
        this.pedido = pedido
        this.contato = this._validacontato(contato)
}

    _validacontato = (contato)=>{
        if(contato.length >= 6){
            return contato
        }
        else {
            throw new Error("O contato precisa ter mais de 6 caracteres")
        }
    }

}

export default MotoboySchema