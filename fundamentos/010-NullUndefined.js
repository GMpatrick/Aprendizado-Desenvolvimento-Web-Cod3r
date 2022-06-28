let valor //não inicializada, vai ser o conceito de undefined

console.log(valor)

valor = null // ausencia de valor (Não aponta para nenhum local de memoria)
console.log(valor)
//console.log(valor.toString()) // vai dar erro

const produto = {}
console.log(produto.preco) // undefined
console.log(produto)

produto.preco = 3.50
console.log(produto.preco)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null // sem preco
console.log(!! produto.preco)
console.log(produto)