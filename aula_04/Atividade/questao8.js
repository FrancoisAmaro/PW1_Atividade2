/* Ao executar const contadorA = criarContador(), o escopo pai inicializa let contagem = 0.
A função interna retornada contador() forma uma closure, mantendo acesso direto à variável contagem 
na memória mesmo após o término da função mãe.
Cada nova chamada incrementa contagem++ e retorna o valor atualizado preservado por essa closure. */

function criarContador() {
  let contagem = 0;
  return function contador() {
    contagem++;
    return contagem;
  };
}

const contadorA = criarContador();
console.log(contadorA()); 
console.log(contadorA()); 
console.log(contadorA()); 

