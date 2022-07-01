function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

/* A diferença entre o call e apaly é a forma que você passa os parametrso
na hora de invocar   */

const produto = {
    nome: 'notbook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1

console.log(produto)

console.log(getPreco())

console.log(produto.getPreco())

// utilizando o aply

const carro = {preco: 49999, desc: 0.20}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.18, '$'))
console.log(getPreco.apply(carro,[0.17, '$']))