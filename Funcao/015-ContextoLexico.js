const valor = 'Global'

/* O contexyo lexico na qual minha funcao foi declarada é em um modulo do node */
function minhaFuncao(){
    console.log(valor)
}

minhaFuncao()

function exec(){
    const valor = 'Local'
    minhaFuncao()
}

exec()