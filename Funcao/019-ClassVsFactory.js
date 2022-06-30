class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar (){
        console.log(`Meu nome é ${this.nome}`)
    }
}

jogador1 = new Pessoa('marcos')
console.log(jogador1.nome)
jogador1.falar()


const pessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const jogador2 = pessoa('Patrick')

jogador2.falar()