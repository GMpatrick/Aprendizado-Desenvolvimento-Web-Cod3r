
const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true},
]

// desafio 1: Todos os alunos são bolsistas

const todosOsBolsistas = (resultado, bolsista) => resultado  && bolsista 
console.log(alunos.map(a => a.bolsista).reduce(todosOsBolsistas))


// desafio 2: Algum aluno é bolsista

const algunBolsista  = (resultado, bolsista) => resultado == true || bolsista == true

console.log(alunos.map(a => a.bolsista).reduce(algunBolsista))