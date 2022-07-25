
/* Exemplo do filter: todos os alunos com as notas maiores que 7 */

const notas = [10,9,8,7,6,5,4,3,2,1]

let teste = notas.filter(num => num > 7)

console.log(teste)
console.log()

const produtos = [
    {nome: 'Notebook', "preco": 3499, "fragil": true},
    {nome: 'Ipad pro', "preco": 5000, "fragil": true},
    {nome: 'Copo de vidro', "preco": 12.56, "fragil": true},
    {nome: 'Copo de plastico', "preco": 18.99, "fragil": false}
]

console.log(produtos.filter(p => p.fragil == true && p.preco > 2000))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))