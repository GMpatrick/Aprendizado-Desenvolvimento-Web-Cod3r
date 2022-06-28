const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'

const template = `
    olá
    ${nome}!`
console.log(concatenacao, template)

// expressoes...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()

console.log(`Ei...${up('cuidado')}!`)
/* 
const soma = (s, v) => (s + v * 67)
console.log(soma(10, 3))
 */