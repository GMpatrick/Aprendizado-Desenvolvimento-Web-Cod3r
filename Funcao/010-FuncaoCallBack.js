const fabricantes = ["Mercedes","Audi","BMW"]

function imprimir(nome, indice){
    console.log(`Nome: ${nome}, Indice: ${indice + 1}`)
}

fabricantes.forEach(imprimir)

console.log()

fabricantes.forEach(function(a, b, c){
    console.log(a, b, c)
})

console.log()

fabricantes.forEach((fabricante, indice) => console.log(fabricante, indice))

console.log()

fabricantes.forEach(fabricante => console.log(fabricante))