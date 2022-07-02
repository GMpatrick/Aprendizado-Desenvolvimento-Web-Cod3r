const pessoa = {nome: 'PAtrick'}

Object.freeze(pessoa)

pessoa.nome = 'Testee'
pessoa.end = 'Rua tal'

delete pessoa.nome


console.log(pessoa.nome)
console.log(pessoa)


const pessoaConstante = Object.freeze({nome: 'João'})
console.log(pessoaConstante)