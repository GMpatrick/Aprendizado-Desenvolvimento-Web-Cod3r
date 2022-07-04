// Cadeia de protótipos (prototype chain)

/* Object.prototype.atrr0 = '0' */

const avo = {atrr1: 'A'}

const pai = {__proto__: avo, atrr2: 'B', soma(valo1, valor2){return valo1 + valor2}, atrr3: 'oito'}

const filho = {__proto__: pai, atrr3: 'C'}

console.log(filho.atrr1, filho.soma(1,2), filho.atrr3) /* ele busca do avo */ 

//no atrr3 ele busca o valor 'C' pois ele encontrou no objeto filho


const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){ 
        return `${this.velAtual} Km/h de $${this.velMax}Km/h`
    }
}


console.log(carro.status())

const ferrari = {
    modelo: 'F40',
    velMax: '324' // shadowing
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}` /* uso do super para usar o metodo do prototipo */
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(1)
volvo.acelerarMais(5)
console.log(volvo.status())

ferrari.acelerarMais(100)
console.log(ferrari.status())