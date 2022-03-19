class MotoboySchema{
    constructor(nome, moto, contato, pedido){
        this.nome = nome 
        this.moto = moto 
        this.contato = contato
        this.pedido = this._validapedido(pedido)
}

    _validapedido = (pedido)=>{
        if(pedido.length >= 6){
            return pedido
        }
        else {
            throw new Error("O pedido precisa ter mais de 6 caracteres")
        }
    }

}

export default MotoboySchema