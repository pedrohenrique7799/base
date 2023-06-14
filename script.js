class MeuError extends Error{
    constructor(message){
      super(message);
      this.name = "Meu Erro";
    }
  }
  
  class Produto {
      constructor(nome, dataCadastro, valor, descricao){
              this.nome = nome;
              this.dataCadastro = dataCadastro;
              this.valor = valor
              this.descricao = descricao;
      }
  
      mostrarAtributos(){
        try {
          return this.mostrarProduto();  
        } catch (error) {
          console.log(error) 
        }
      } 
  
  mostrarProduto(){
    if ((this.nome!= "")&&(this.descricao != "")&&(this.valor != "")&&(this.dataCadastro != "")){
     return `
     <h1>${this.nome}</h1>
     <h1>${this.dataCadastro}</h1>
     <h1>${this.valor}</h1>
     <h1>${this.descricao}</h1>
     `
    }else{
      throw new MeuError("Falta algo no produto")
    }
  }
  }
  class ProdutoDestaque extends Produto{
      constructor (nome , dataCadastro,imagemProdutoD, valor, descricao){
          super(nome , dataCadastro , valor, descricao )
          this.imagemProdutoD = imagemProdutoD
      }
  
      mostrarAtributosD(){
        try{
          return this.mostrarProdutoD();
        } catch(error){
          console.log(error)
        }
      }
  
      mostrarProdutoD(){
        if ((this.nome!= "")&&(this.descricao != "")&&(this.preco != "")&&(this.dataCadastro != "")&&(this.imagemProdutoD != "")){
      return `
        <h1>${this.nome}</h1>
        <h1>${this.dataCadastro}</h1>
        <img src="${this.imagemProdutoD}">
        <h1>${this.valor}</h1>
        <h1>${this.descricao}</h1>
      `
        }else{
          throw new MeuError("Falta algo no Produto Destaque")
        }
      }
  }
  
  const produto = new Produto("Cinto LV Initiales reversível 40 MM", "13/09/2022", "O cinto LV Initiales reversível 40 MM é um acessório multifacetado e um parceiro ideal para a Coleção Masculina Spring-Summer 2019. O couro Taiga macio de um lado contrasta com uma versão colorida do icônico canvas Monogram da Maison. A discreta paleta em tom sobre tom das iniciais LV é emoldurada por um metal polido, um ponto focal distinto para o cinto.", "R$"+239.99)
  const produto2 = new Produto("LV Spotlight 40MM Belt", "18/07/2023", "The LV Spotlight 40mm Belt has a cool and contemporary feel, perfect for lovers of Virgil Abloh’s fashion-forward design aesthetic. The strap features rubberised leather on one side and soft nappa leather on the reverse. This accessory is finished with a bright LV Initials buckle with a vibrant gradient effect.","R$"+785.00)
  const produtoDestaque = new ProdutoDestaque("", "23/12/2022", "https://cf.shopee.com.br/file/cdd31b65dc8356f966d90c0895d99992", "R$"+3.450, "O cinto reversível LV Tatic 35 mm confere um toque esportivo a símbolos icônicos da Maison com sua fivela colorida. O fecho marcante apresenta três camadas de acabamentos contrastantes e um formato moderno. Um efeito quadriculado tom sobre tom na correia em couro de vitelo completa a estética com inspiração esportiva deste modelo. ")
  
  console.log(produto.mostrarProduto())
  console.log(produto2.mostrarProduto())
  console.log(produtoDestaque.mostrarProdutoD())
  
  const produtoComum = document.getElementById("lista-produtos")
  produtoComum.insertAdjacentHTML('afterbegin', produto.mostrarProduto())
  const produtoComum2 = document.getElementById("lista-produtos")
  produtoComum2.insertAdjacentHTML('afterbegin', produto.mostrarProduto())
  const produtoD = document.getElementById("produto-destaque")
  produtoD.insertAdjacentHTML('afterbegin', produtoDestaque.mostrarProdutoD())