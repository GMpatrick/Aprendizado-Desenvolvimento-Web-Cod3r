/* class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar (){
        console.log(`Meu nome é ${this.nome}`)
    }
}

jogador1 = new Pessoa('marcos')
console.log(jogador1.nome)
jogador1.falar() */


function criarPessoa(nome){

    this.nome = nome

    this.falar = () =>  console.log(`Meu nome é ${this.nome}`)
}

const p1 = new criarPessoa('Doraci')

p1.falar()
