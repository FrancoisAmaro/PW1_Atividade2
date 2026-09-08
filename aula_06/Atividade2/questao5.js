// Desestruturação em Parâmetros de Arrow Function com .map()

const alunos = [
  { nome: "Ana", curso: "TSI" },
  { nome: "Bruno", curso: "Redes" },
  { nome: "Carla", curso: "Analise de dados" },
];

// Desestrutura { nome, curso } diretamente no parâmetro da arrow function
const formatados = alunos.map(({ nome, curso }) => `${nome} - ${curso}`);

console.log(formatados);
// Saída: [ 'Ana - TSI', 'Bruno - Redes', 'Carla - Analise de dados' ]