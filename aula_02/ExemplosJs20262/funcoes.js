// Declaration function
// function somar(a, b) {
//   return a + b;
// }

// Expression funcion
// let idade = 20;
// let somar = function (c, d) {
//   return c + d;
// };

// console.log(idade);
// console.log(somar(2, 3));

// Arrow
let somar = (a, b) => a + b;
let subtrair = (a, b) => a - b;

let valor1 = 4;
let valor2 = 3;
let resultado = somar(valor1, valor2);
console.log(resultado);

let calculadora = (a, b, operacao) => {
  return operacao(a, b);
};

// callback
let r1 = calculadora(valor1, valor2, somar);
let r2 = calculadora(valor1, valor2, subtrair);
calculadora(valor1, valor2, (a, b) => {
  if (a == 0) {
    a = 1;
  }
  return (a + b) / 2;
});
