/* 03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente. */

const baseElevada = (base, exponente) => console.log(base ** exponente)

// usando a biblioteca math

const baseElevadaComMath = (base, exponente) => console.log(Math.pow(base, exponente))

baseElevada(2, 3)
baseElevadaComMath(2,3)