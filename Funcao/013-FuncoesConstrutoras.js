function Carro(velocidadeMaxima = 200, delta = 5){
    // atributo privado
    let veloidadeAtual = 0

    // metodo publico
    this.acelear = function(){
        if(veloidadeAtual + delta <= velocidadeMaxima){
            veloidadeAtual += delta
        }else{
            veloidadeAtual = velocidadeMaxima
        }
    }

    //metodo publico
    this.getVelocidadeAtual = function (){
        return veloidadeAtual
    }
}

const uno = new Carro

uno.acelear()
uno.acelear()
uno.acelear()
uno.acelear()
uno.acelear()
console.log(uno.getVelocidadeAtual())

const Ferrari = new Carro(350, 20)

Ferrari.acelear()
Ferrari.acelear()
Ferrari.acelear()
Ferrari.acelear()
console.log(Ferrari.getVelocidadeAtual())