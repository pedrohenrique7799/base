// divListaProduto.insertAdjacentHTML('afterbegin', '');

class Produto {
    constructor(nome, dataCadastro, descricao, valor){
            this.nome = nome;
            this.dataCadastro = dataCadastro;
            this.descricao = descricao;
            this.valor = valor
    }
mostrarProduto(){
    return `
    <h1>${this.nome}</h1>
    <img src="${this.imagem}"
    <div>${this.dataCadastro}</div>
    <p>${this.descricao}</p>
    `
    //this.nome + this.dataCadastro + this.descricao + this.valor
}
}
class ProdutoDestaque extends Produto{
    constructor (nome , dataCadastro,descricao , valor, imagem){
        super(nome , dataCadastro , descricao, valor )
this.imagem = imagem
        
    }

mostrarProdutoDestq(){
 return this.imagem
}
}

const produto = new Produto("Liquidificador", "17/09/2022", "Liquidificador Mundial power3x", 129,90)
const produtoDestaque = new ProdutoDestaque("Faca", "12/02/2023", "Faca Tramontina Corte Rápido", 259,99, "https://images.tcdn.com.br/img/img_prod/959075/faca_chef_tramontina_plenus_lamina_em_aco_inox_cabo_preto_8_299_1_c8dc136d540307cf96cd4a52b6c843a1.jpg")
console.log(produto.mostrarProduto())
console.log(produtoDestaque.mostrarProdutoDestq())

const produtoPadrao = document.getElementById("lista-produtos")
produtoDestaque.insertAdjacentHTML('afterbegin', produto.mostrarProduto)