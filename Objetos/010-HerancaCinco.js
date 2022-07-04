// toda função tem um prototype

console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function (){
    return this.split('').reverse().join('')
} // essa função eu acebei de criar 

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function (){
    return this[0]
}

console.log([1,2,3,4,5,6,7,8].first())

/* Nunca fazer */

String.prototype.toString = function (){
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse())