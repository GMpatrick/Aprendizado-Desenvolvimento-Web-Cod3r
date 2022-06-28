const escola = "Cod3r"

console.log(escola.charAt(4)) /* vai retornar o que esta no 4 */
console.log(escola.charAt(5)) // não existe o campo 5 mas mesmo assim ela não da erro
console.log(escola.charCodeAt(3)) // pegar o valor na tabela ASCI
console.log(escola.indexOf('C')) /* Existe o valor 3 dentro de escola, ai ele retorna a posição em que ele se encontra */

console.log(escola.substring(1)) /* aqui ele vai do indice 1 até o final */
console.log(escola.substring(0, 3)) /* aqui ele vai do indice 0 até o indice 3, sem incluir o indice 3 */

console.log('Escola '.concat(escola).concat("!"))
let teste = "Patrikc"

teste = teste.concat(" ola patrick")

console.log(teste)

teste = teste.concat('Sera quye deu certo')

console.log(teste)


console.log(escola.replace(3, 'E')) // substituir o 3 pela palavra e

console.log('Ana, Maria, Pedro'.split(','))

/* ------------------------------------------------------------ */

