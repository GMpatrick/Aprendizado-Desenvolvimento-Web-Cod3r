/* Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. */

function aumentoDeSalario(planoTrabalho, salario){
    let salarioAumentado = 0

    switch (planoTrabalho){
        case 'A':
            salarioAumentado = salario + (salario * 0.10)
            break
        case 'B':
            salarioAumentado = salario + (salario * 0.15)
            break
        case 'C':
            salarioAumentado = salario + (salario * 0.20)
            break
        default :
            console.log('plano invalido')
    }

    return salarioAumentado
}

console.log(aumentoDeSalario('J', 20))

