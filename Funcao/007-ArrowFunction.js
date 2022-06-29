let dobro = function(a){
    return 2 * a
}

/* reescrevendo a funcao, com uma funcao arrow */

dobro = (a) => {return 2 * a}

/* mais reduzida, como só tem um parametro não prescisa do parenteses */

dobro = a => 2 * a
console.log(dobro(Math.PI))


let ola = function (){
    return 'Ola'
}

ola = () => 'Olá'

console.log(ola())