const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)
    } /* Nesse contexto eu presciso usar o this */
}
pessoa.falar()

const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

// para resolver este problema usa o bind

const falarDePessoa = pessoa.falar.bind(pessoa)

/* O bind você passa um objeto na qual você quer que seja 
resolvido o this */

falarDePessoa()