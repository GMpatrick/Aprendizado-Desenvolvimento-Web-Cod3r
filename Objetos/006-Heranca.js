const ferrari= {
    modelo: 'f40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__) /* Caso eu tente achar algum atributo dentro de ferrari
e não encontra ele vai procurar no objeto prototype que é o objeto pai */

console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)

console.log(Object.prototype.__proto__)


function meuObjeto() {}

console.log(typeof Object, typeof meuObjeto)
console.log(Object.prototype, meuObjeto.prototype)

/* essa é a forma que o javascript define herança */