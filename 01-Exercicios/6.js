/* Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */

function jurosSimples (capitalInicial, taxaJuros, tempoAplicacao) {

    const montanteFinal = capitalInicial * (taxaJuros / 100) * tempoAplicacao

    return montanteFinal
}

console.log(jurosSimples(1000,10,3))

function JurosCompostos(capitalEmprestado, taxaJuros, tempo){
    let montanteFinalll = (capitalEmprestado * (1 + taxaJuros / 100) ** tempo).toFixed(2)
    return montanteFinalll
}

console.log(JurosCompostos(1000,10,3))