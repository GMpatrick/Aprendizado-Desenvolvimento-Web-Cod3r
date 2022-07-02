const sequencia = {
    _valor: 1, // convenção variavel com _ usada geralmente só no objeto

    get valor(){return this._valor++},

    set valor(valor){
        if(valor > this._valor){
            this._valor = valor
        }else{
            console.log('numero invalido')
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000

console.log(sequencia.valor)

sequencia.valor = 0
console.log(sequencia.valor)

