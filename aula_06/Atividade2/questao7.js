// Desestrutura titulo e preco diretamente nos parâmetros


function CardProduto({ titulo, preco }) {
  return `
    <div>
      <h3>${titulo}</h3>
      <p>R$ ${preco}</p>
      <button> Comprar</button>
    </div>
  `;
}

// Exemplo de uso passando um objeto como props
const resultado = CardProduto({ titulo: "Mouse Gamer", preco: 120 });

console.log(resultado);
// Saída:
// <div>
//   <h3>Mouse Gamer</h3>
//   <p>R$ 120</p>
//   <button> Comprar</button>
// </div>