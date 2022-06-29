// referente a aula 10

const fabricantes = ["Mercedes","Audi","BMW"]

function imprimir(lista){
    for (let i = 0; i < lista.length; i++){
        console.log(`Nome: ${lista[i]} || Indice: ${i}`)
    }
}

imprimir(fabricantes)