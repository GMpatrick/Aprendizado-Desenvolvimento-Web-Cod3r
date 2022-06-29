/* A ideia de criar uma funcao factory é criar uma funcao que 
retorne um objeto */

/* subtituir isso */

/* const prod1 = {
    nome: '...',
    preco: 34
}

const prod2 = {
    nome: '...',
    preco: 99
} */

/* Por isso */

// factory simples

function criaPessoa(){
    return{
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}


console.log(criaPessoa())
