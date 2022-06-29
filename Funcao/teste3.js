// referente a aula 17

function CaractPesonagemPorClasse(classe){
    carct = {}

    if(classe == 'MAGO'){
        carct = {
            nome: 'Patrick',
            sobrenome: 'Magico',
            classe: 'Mago'
        }
    }else{
        carct ={nome: 'Sem classe'}
    }

    return carct
}

console.log(CaractPesonagemPorClasse('MAG'))

