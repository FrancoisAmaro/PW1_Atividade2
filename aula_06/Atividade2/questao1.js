// Conceito de desestruturação em JavaScript

/* É uma sintaxe que permite extrair dados de arrays ou objetos diretamente para
variáveis individuais de forma declarativa, eliminando o excesso de código e a 
repetição do acesso tradicional. */

// Exemplo de desestruturação de array
const numeros = [1, 2, 3, 4, 5];
const [primeiro, segundo, ...resto] = numeros;

console.log(primeiro); // Saída: 1
console.log(segundo); // Saída: 2
console.log(resto); // Saída: [3, 4, 5]