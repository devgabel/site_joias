// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(event) {
    const botao = event.target;
    const produto = botao.parentElement;
    const nomeProduto = produto.querySelector('h2').textContent;
    const precoProduto = produto.querySelector('.price').textContent;

    // Criar um item de carrinho
    const itemCarrinho = document.createElement('div');
    itemCarrinho.classList.add('cart-item');
    itemCarrinho.innerHTML = `
        <p>${nomeProduto} - ${precoProduto}</p>
        <button class="remover">Remover</button>
    `;

    // Adicionar o item ao carrinho
    const carrinho = document.querySelector('.cart');
    carrinho.appendChild(itemCarrinho);

    // Adicionar evento de remoção ao botão de remover
    const botaoRemover = itemCarrinho.querySelector('.remover');
    botaoRemover.addEventListener('click', removerDoCarrinho);
}

// Função para remover um produto do carrinho
function removerDoCarrinho(event) {
    const botaoRemover = event.target;
    const itemCarrinho = botaoRemover.parentElement;
    itemCarrinho.remove();
}

// Adicionar evento de clique aos botões de adicionar ao carrinho
const botoesAdicionar = document.querySelectorAll('.product button');
botoesAdicionar.forEach(botao => {
    botao.addEventListener('click', adicionarAoCarrinho);
});