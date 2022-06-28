const a = function soma(a, b){
    return a + b
}

console.log(a(1,3))


function somar (a, b=function(aqq, azz){return aqq + azz}){
    return a + b
}

console.log(somar(3, (2,4)))