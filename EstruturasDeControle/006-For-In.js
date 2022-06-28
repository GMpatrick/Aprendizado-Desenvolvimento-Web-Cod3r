const notas = [5.5 , 3.4, 4.5, 7.9, 8.2, 10]

for(let posicao in notas){
    console.log(notas[posicao])
}

console.log()

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64,
    cidadania: {
        pais: 'Brasil',
        bairro: 'Morro do meio'
    },
    esporte: 'Boxe'
}

for(let num in pessoa){
    console.log(`${num} = ${pessoa[num]}`)
}