Array.prototype.forEachDois = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }


}

const aprovados = ['agatha','aldo','Daniek', 'raquel']

aprovados.forEachDois((nome, indice) => console.log(nome, indice))



/* aprovados.forEachDois(function(nome, indice){
    console.log(`Indice ${indice + 1} ${nome}`)
}) */

