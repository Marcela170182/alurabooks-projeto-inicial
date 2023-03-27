let btnOrdenarPorPreco = document.getElementById("btnOrdernarPorPreco")
btnOrdenarPorPreco.addEventListener("click", ordenarLivrosPorPreco)

function ordenarLivrosPorPreco() {
    let livrosOrdenados = livros.sort((a, b) => b.preco - a.preco)
    exibirOsLivrosNaTela(livrosOrdenados)
}