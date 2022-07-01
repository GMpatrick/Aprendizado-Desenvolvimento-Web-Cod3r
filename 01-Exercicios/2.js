/* 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo). */


function tipoDeTriangulo(valor1, valor2, valor3){

    let tipoDeTriangulo

    if(valor1 == valor2 && valor1 == valor3 && valor2 == valor3){
        tipoDeTriangulo = 'Equilatero'
    }else if(valor1 != valor2 && valor1 != valor3 && valor2 != valor3){
        tipoDeTriangulo = 'Escaleno'
    }else{
        tipoDeTriangulo = 'Isóceles'
    }

    return tipoDeTriangulo
}   

console.log(tipoDeTriangulo(1,1,1)) /* tem que retornar equilatero */
console.log(tipoDeTriangulo(1,2,3)) /* tem que retornar escaleno */
console.log(tipoDeTriangulo(1,2,2)) /* tem que retornar Isoceles */