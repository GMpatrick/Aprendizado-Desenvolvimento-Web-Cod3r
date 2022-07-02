 // forma literal

 const obj = {}


 // object em js

 console.log(typeof Object, typeof new Object)
 const obj2 = new Object

 // funcções construroas

 function Produto (nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc) 
    }
}

const p1 = new Produto('caneta', 7.2, 0.12)

p1.nome = 'Roberta'

console.log(p1.getPrecoComDesconto())

// funcao factory

function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase, 
        faltas,
        getSalario (){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Patrick', 2300, 2)

console.log(f1.getSalario())