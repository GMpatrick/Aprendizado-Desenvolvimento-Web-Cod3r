let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!! isAtivo) // verdadeiro
console.log(! isAtivo) // falso

console.log(!true) // falso
console.log(!false) // verdadeiro

/* Como eu faço para transformar um valor, em um valor verdadeiro ou falso */

/* Com o uso do not... quando você tem um valor verdadeiro e usa um not
esse valor fica não verdadeiro(falso) e quando você usa dois not  
você volta para o valor original que era*/

console.log('Os verdadeiros....')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log()

console.log('Os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))
console.log(!!('' || null || 0 || ' ')) // aqui vai dar verdadeiro pq pelo menos uma das condições tem que ser verdadeira
