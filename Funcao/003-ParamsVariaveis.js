
function soma(){
    let soma = 0 
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1,2,3,44))
console.log(soma(1,2,3,44,'testexx'))