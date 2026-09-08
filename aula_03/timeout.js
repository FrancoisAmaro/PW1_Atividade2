let exibirMensagem = (a,b) => {
    console.log('Chamou a minha função dentro do timeout:' + a + b);
};
let valores = ['IFPB', 'GBA'];
setTimeout(exibirMensagem, 3000, valores);

exibirMensagem(valores[0], valores[1]);