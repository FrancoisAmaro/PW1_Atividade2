// Desestruturação de objeto Simples

const aluno = {
  nome: "Marina",
  idade: 21,
  curso: "Sistemas de Informação"
};

// Extrai as propriedades 'nome' e 'idade' em variáveis com os mesmos nomes
const { nome, idade } = aluno;

console.log(nome, idade);
// Saída: Marina 21