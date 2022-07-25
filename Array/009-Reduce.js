/* Transfromar um array em um unico elemento... o resultado da função reduce é sempre passado para o proximo parametro */

const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true},
]


const resultado = alunos.map(a => a.nota).reduce(function(acumulador, valorATual){
    console.log(acumulador, valorATual)
    return acumulador , valorATual
})

console.log()

const resultadoComSoma = alunos.map(a => a.nota).reduce(function(acumulador, valorATual){
    console.log(acumulador, valorATual)
    return acumulador + valorATual
})

console.log()
console.log(resultadoComSoma)
console.log()

const resultadoComSomaValInicial = alunos.map(a => a.nota).reduce(function(acumulador, valorATual){
    console.log(acumulador, valorATual)
    return acumulador + valorATual
}, 10) /* para a callback ter um valor inicial */

console.log(resultadoComSomaValInicial)