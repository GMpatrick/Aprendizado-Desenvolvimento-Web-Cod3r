/* Clouseres é o escopo criado quando uma função é declarada */
/* Esse escopo permite a função acessar e manipalr variaveis externas a funcao */

/* Contexto lexico em ação */

const x = 'Global'

function fora(){

    const x = 'Local'
    
    function dentro(){
        return x
    }
    
    return dentro
}

const minhaFuncao = fora()

console.log(minhaFuncao())