const pai = {nome: 'Pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai)

filha1.nome = 'MAria'

console.log(filha1.corCabelo)

filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true},
    
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)


console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2){
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança ${key}`)
} // verificar se pertence ao proprio objeto ou se veio por herança
