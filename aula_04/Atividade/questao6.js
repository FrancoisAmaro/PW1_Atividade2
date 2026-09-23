/* Ao exececutar o código abaixo, ocorreu o seguinte erro de sintaxe:

const multiplicar = (a, b) => a * b;

ReferenceError: Cannot access 'multiplicar' before initialization.

Isso acontece porque a função `multiplicar` está sendo chamada antes de ser definida. 
Em JavaScript, as funções declaradas com `const` ou `let` não são "hoisted" (elevadas) 
como as funções declaradas com `function`. Portanto, você precisa garantir que a função 
seja definida antes de ser chamada. */


// 1. Declarar/atribuir primeiro
const multiplicar = (a, b) => a * b;

// 2. Chamar a função depois
console.log(multiplicar(2, 3));
