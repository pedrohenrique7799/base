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
    <img src="${this.imagem}">
    <h2>${this.valor}</h2>
    <h4>${this.dataCadastro}</h4>
    <h4>${this.descricao}</h4>
    `
}
}
class ProdutoDestaque extends Produto{
    constructor (nome , dataCadastro,descricao , valor, imagem){
        super(nome , dataCadastro , descricao, valor )
this.imagem = imagem
        
    }

mostrarProdutoDestq(){
 return `
 <h1>${this.nome}</h1>
 <img src="${this.imagem}">
 <h2>${this.valor}</h2>
 <h4>${this.dataCadastro}</h4>
 <h4>${this.descricao}</h4>
 `
}
}

const produto = new Produto("Liquidificador Mondial Turbo Power L-99 FB - Preto com Filtro 3 Velocidades 550W", "17/09/2022", "Conheça o liquidificador da Mondial L-99 WB Turbo Power. Além de moderno e elegante na linda cor preta, ele conta com um novo sistema de encaixe pra deixar a montagem mais prática e fácil.", "R$"+129,90)
const produtoDestaque = new ProdutoDestaque("Faca", "12/02/2023", "Faca Tramontina Corte Rápido", "R$"+259,99, "https://images.tcdn.com.br/img/img_prod/959075/faca_chef_tramontina_plenus_lamina_em_aco_inox_cabo_preto_8_299_1_c8dc136d540307cf96cd4a52b6c843a1.jpg")
console.log(produto.mostrarProduto())
console.log(produtoDestaque.mostrarProdutoDestq())

const produtoPadrao = document.getElementById("lista-produtos")
produtoPadrao.insertAdjacentHTML('afterbegin', produto.mostrarProduto())
const produtoDestaq = doment.getElementById("produto-destaque")
produtoDestaq.insertAdjacentHTML('afterbegin', produtoDestaque.mostrarProdutoDestq())