// divListaProduto.insertAdjacentHTML('afterbegin', '');

class Produto {
    constructor(nome, datac, descricao, preco){
            this.nome = nome;
            this.datac = datac;
            this.descricao = descricao;
            this.preco = preco
    }
mostrap(){
    this.nome + this.datac + this.descricao + this.preco
}
}
class Produtod extends Produto{
    constructor (nome , datac,descricao , preco, imagemd){
        super(nome , datac , descricao, preco )
this.imagemd = imagemd
        
    }

mostrapd(){
 return this.imagemd 
}
}