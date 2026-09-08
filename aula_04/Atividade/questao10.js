
/* 
Explicação:
O 'var' tem escopo de função, então todas as iterações do laço compartilham 
a mesma variável 'i'. Quando o setTimeout executa, o laço já terminou e 'i' 
vale 5, imprimindo '5' repetidas vezes.
*/

// Abordagem 1: Usando 'let' (escopo de bloco)
console.log("--- Abordagem 1 (let) ---");
for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000 * (i + 1));
}

// Abordagem 2: Usando Closure explícita com função imediata (IIFE)
console.log("--- Abordagem 2 (Closure/IIFE) ---");
for (var i = 0; i < 5; i++) {
  (function (valorAtual) {
    setTimeout(function () {
      console.log(valorAtual);
    }, 1000 * (valorAtual + 1));
  })(i);
}