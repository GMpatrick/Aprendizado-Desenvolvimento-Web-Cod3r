const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() // remover o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstaphen') // adicionado elemento ao array
console.log(pilotos)

pilotos.shift() // ele tira da primeira posição do array
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona na primeira posicao do array
console.log(pilotos)

aprovados.splice(1, 1) // apargar
/* a função splice cerve para remover ume elemento do array, para adiocionar e para remover e adiconar ao mesmo tempo */
console.log(aprovados)

aprovados.splice(1, 2, 'Elemento novo', 'element NOVO DOIS') 
// adicionar elemento
console.log(aprovados)

// para não exlcuir nada
aprovados.splice(1, 0, 'Elemento1', 'elemento 2')
console.log(aprovados)