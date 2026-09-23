// Nome do repositório no Git: Atividade1Funcoes

/* Function Declaration: É declarada diretamente no escopo usando a palavra-chave function 
seguida de um nome obrigatório. Ela sofre hoisting completo, podendo ser chamada antes de sua 
definição no código.*/

/* Function Expression: É atribuída a uma variável, podendo ser anônima ou nomeada. Ela sofre 
hoisting parcial, sendo necessário declará-la antes de sua utilização.*/

//Function Declaration
function soma(a, b) {
    return a + b;
}

//Function Expression
const subtracao = function(a, b) {
    return a - b;
};