const imprimirResultado = function(nota){
    switch(Math.floor(nota)){
        case 10: 
        case 9: 
            console.log('Quadro de honra')
            break;
        case 8: case 7:
            console.log('Aprovado')
            break;
        case 6: case 5: case 4:
            console.log('Recuperação')
            break;
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break;
        default:
            console.log('Nota inválida')
    }
}

imprimirResultado(4)

const dayOfWeek = new Date().getDay()

console.log(dayOfWeek)

/* // evitar de usa o switch
switch (dayOfWeek){
    case 6:
        Text = "Today is saturday"
        break;
    case 0:
        Text = "Today is sunday"
        break;
    default:
        Text = "Procurando pelos dias da semana"
} */

//e use assim

daysOfWeek = {
    0: "Today is sunday",
    1: "Today is saturday"
}

const text = daysOfWeek[dayOfWeek] || "Procurando pelos dias da semana"

console.log(text)