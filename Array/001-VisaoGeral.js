// array em java script é um Object 

console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array ('Bia', 'Calos', 'ANa')

console.log(aprovados)

aprovados = ['Bia', 'Calos', 'ANa']
console.log(aprovados[0]) // acessando o primeiro elemento do array

console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // undefined

aprovados[3] = 'Paulo' // adicionando novo elemento no array 
aprovados.push('Abia') // mais apropriado
console.log(aprovados.length)


aprovados[9] = 'Rafael' // todos os elementos que ficam de fora vão ficar com os valores undefined

console.log(aprovados.length)
console.log(aprovados[8] === undefined)


aprovados.sort() // vai ordernar o array , causou alteração no proprio array

console.log(aprovados)

delete aprovados[1] // vai apagar o elemento , ele deixa o elemento que tava no array como undefined
console.log(aprovados)

aprovados = ['bia', 'Carlos', 'ana']

aprovados.splice(1, 1) // apargar
/* a função splice cerve para remover ume elemento do array, para adiocionar e para remover e adiconar ao mesmo tempo */

console.log(aprovados)

aprovados.splice(1, 2, 'Elemento novo', 'element NOVO DOIS') // adicionar elemento

console.log(aprovados)

// para não exlcuir nada

aprovados.splice(1, 0, 'Elemento1', 'elemento 2')

console.log(aprovados)


