/* Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1. */


function caixaEletronico(valor){
    let contCem = 0 
    let contCinquenta = 0
    let contDez = 0
    let contCinco = 0
    let contUm = 0


    while (valor != 0) {
        if(valor >= 100){
            valor = valor - 100
            contCem += 1
        }else if (valor < 100 && valor >= 50){
            valor = valor - 50
            contCinquenta += 1
        }else if(valor < 50 && valor >= 10){
            valor = valor - 10
            contDez += 1
        }else if(valor < 10 && valor >= 5){
            valor = valor - 5
            contCinco += 1
        }else if(valor < 5 && valor >= 0){
            valor = valor - 1
            contUm += 1
        }
    }

    return console.log(`${contCem} nota(s) de R$ 100\n${contCinquenta} nota(s) de R$ 50\n${contDez} nota(s) de R$ 10\n${contCinco} nota(s) de R$ 5\n${contUm} nota(s) de R$ 1\nvalor final ${valor} `)
}

caixaEletronico(2)