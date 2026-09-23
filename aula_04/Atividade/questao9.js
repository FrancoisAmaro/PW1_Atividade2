function criarContaBancaria(saldoInicial) {
  let saldo = saldoInicial; // Variável privada protegida por closure

  return {
    depositar: (valor) => saldo += valor,
    sacar: (valor) => saldo -= valor,
    consultarSaldo: () => saldo
  };
}

// Teste rápido:
const minhaConta = criarContaBancaria(100);
minhaConta.depositar(50);
minhaConta.sacar(30);
console.log(minhaConta.consultarSaldo()); // Saída: 120
console.log(minhaConta.saldo); // Saída: undefined (privado)

/* Por que dá undefined: O objeto que a função retorna possui apenas três chaves: depositar, 
sacar e consultarSaldo. Como a chave saldo não foi exposta nele, tentar ler objeto.saldo faz o JavaScript 
retornar undefined. É teste para comprovar o conceito de variável privada via closure 
(provando que ninguém de fora consegue ler ou alterar o saldo diretamente sem usar os métodos). */
