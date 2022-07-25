/* Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false. */

const numero = 333

function numeroDivisivelPorTres(numero){
    let retorno
    let numero_final = 0

    let numeroDividido = numero.toString().split("")
    let somaNumeros = numeroDividido.map(e => parseInt(e))
    
    for(let i = 0; i < somaNumeros.length; i++){
        numero_final = numero_final + somaNumeros[i]
    }

    if(numero_final % 3 == 0){
        retorno = true
    }else(
        retorno = false
    )

    return retorno
}

console.log(numeroDivisivelPorTres(numero))