/* Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores. */

function calculo(valor1, valor2){
    return console.log(` Soma: ${valor1 + valor2} \n Subtração: ${valor1 - valor2} \n Multiplicação: ${valor1 * valor2} \n Divisão: ${valor1 / valor2}`)
}

calculo(1,2)

console.log()

const calculoArrow = (valor1, valor2) => console.log(` Soma: ${valor1 + valor2} \n Subtração: ${valor1 - valor2} \n Multiplicação: ${valor1 * valor2} \n Divisão: ${valor1 / valor2}`)

calculoArrow(5,5)