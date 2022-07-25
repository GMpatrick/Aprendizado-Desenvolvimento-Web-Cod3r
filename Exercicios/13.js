/* Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares. */

function lerVetor(...numeros){
    let numerosPares = numeros.filter(e => e % 2 == 0)
    let numerosImpares = numeros.filter(e => e % 2 == 1)
    
    console.log(`Estes são os numeros pares: ${numerosPares} ao todo eles são ${numerosPares.length}\nEstes são os numeros Impares: ${numerosImpares} ao todo eles são ${numerosImpares.length}`)
}


lerVetor(1,2,3,4,5,6,7,8,9,10,11,12,13)