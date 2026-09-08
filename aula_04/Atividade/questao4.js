/* Ocorre devido ao hoisting (elevação). Declarações de função (function declarations) são içadas 
por completo para o topo do seu escopo de execução durante a fase de compilação, 
permitindo que a função seja invocada antes da linha em que foi escrita. */


console.log(saudacao());

function saudacao() {
    return "Olá, turma!";
}
