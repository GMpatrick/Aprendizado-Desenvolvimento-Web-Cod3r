const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

// representadno o operador destructuring
const { nome: n, idade: i } = pessoa

console.log(n, i)

// caso não exista para retornar um valor padrão
const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const {endereco: {logradouro, numero, cep}} = pessoa

console.log(logradouro, numero, cep)