// Callback

/* Uma função callback é uma função passada como argumento para outra função, 
para ser executada posteriormente após um determinado evento ou processamento. */


function calcular(a, b, operacao) {
    return operacao(a, b);
}
const soma = (x,y) => x + y;


const resultadoSoma = calcular(5, 3, soma);
console.log(resultadoSoma);



