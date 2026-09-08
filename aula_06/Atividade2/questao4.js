// Renomeação e valor padrão

const produto = { nomeProduto: "Teclado", preco: 150 };

// Renomeia nomeProduto -> nome; define valor padrão 0 para quantidade
const { nomeProduto: nome, estoque: quantidade = 0 } = produto;

console.log(nome, quantidade);
// Saída: Teclado 0