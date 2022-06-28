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