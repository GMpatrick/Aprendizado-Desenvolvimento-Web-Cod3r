
function criarProduto(nome, preco, desconto = 0.5){
    return {
        nome: nome,
        preco: preco,
        desconto: desconto,
        preco_final: preco - (preco * desconto) 
    }
}

console.log(criarProduto('Lapis', 10))

console.log(criarProduto('Xbox', 2999.99, 0.10))