const aprovados = ['agatha','aldo','Daniek', 'raquel']

aprovados.forEach(function(nome, indice){
    console.log(`Indice ${indice + 1} ${nome}`)
})

aprovados.forEach(function(nome, indice, array){
    console.log(`Indice ${indice + 1} ${nome}`)
    console.log(array)
})

aprovados.forEach((nome, indice) => console.log(nome, indice))

const exibirAprovados = (aprovados, indice) => console.log(aprovados, indice)

aprovados.forEach(exibirAprovados)
