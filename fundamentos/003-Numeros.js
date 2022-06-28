const peso1 = 1.0

const peso2 = Number('2.0')

console.log(typeof peso1, typeof peso2)
console.log(Number.isInteger(peso1))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2

const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // limitar as casas decimais
console.log(media.toString()) // converter para uma string
console.log(typeof media)

console.log()
/* Aleguns cuidadaods com numbers */

console.log(7 / 0) /* ele vai retornar infinite */

console.log("10.27" / 2) //aqui ele vai converter

console.log("Show!" * 2) /* NaN */

console.log(0.1 + 0.8 ) /* aqui ele não vai dar 0.8  */

console.log((10.254).toString)