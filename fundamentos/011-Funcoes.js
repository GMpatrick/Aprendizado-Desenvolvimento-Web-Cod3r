// funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2,3)
imprimirSoma(2)
imprimirSoma(2,3,4,5,6,67)

// função com retorno
function Soma(a = 0, b = 0){
    return a + b
}

console.log(Soma(2,3))
