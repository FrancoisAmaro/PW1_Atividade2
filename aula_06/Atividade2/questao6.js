// Desestruturação de objetos aninhados

const usuario = {
  nome: "Pedro",
  endereco: {
    rua: "Av. Brasil",
    cidade: "João Pessoa",
    estado: "PB"
  }
};

// Extrai cidade e estado diretamente em uma única linha
const { endereco: { cidade, estado } } = usuario;

console.log(cidade, estado);
// Saída: João Pessoa PB