function tratarErroELancar(erro){
    /* throw new Error('Verifique se o campo mencionado esta correto') */
   /*  throw 'Verifique se o campo mencionado esta correto' */
   throw{
    nome: erro.name,
    msg: erro.message,
    date: new date
   }
}


function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e){
        tratarErroELancar(e)
    }finally{
        console.log('final')
    }
    
}

const obj = {name: 'Patrick'}

imprimirNomeGritado(obj)

