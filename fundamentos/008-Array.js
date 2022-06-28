const valores = [7.8, 8.4, 4.5,9.2]

console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste') // adicionar elementos ao array
console.log(valores)

console.log(valores.pop()) // vai eliminar o ultimo valor do array
delete valores[0]
console.log(valores)

console.log(typeof valores)