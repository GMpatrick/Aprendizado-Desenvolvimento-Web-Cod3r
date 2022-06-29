const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 1.1, 9.0]
let notasBaixas = []

// sem calback
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)


// com callbakc
notasBaixas2 = notas.filter(
    function(nota){
        return nota < 7
    }
)
console.log(notasBaixas2)

// utilizando arrow

const notasBaixas3 = notas.filter(nota => nota <  7)

console.log(notasBaixas3)

notasAltas = nota => nota > 8
ignoraNove = nota => nota != 9

const notasBaixas4 = notas.filter(notasAltas).filter(ignoraNove)

console.log(notasBaixas4)