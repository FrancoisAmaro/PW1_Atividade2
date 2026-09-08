let cadastrarPessoa = ({nome, cpf}) => {
    // nome e cpf
    // let { nome, cpf} = pessoa;
    console.log('cadastrando uma pessoa:');
    console.log(`nome: ${nome}`);
    console.log(`cpf: ${cpf}`);
    console.log('Pessoa cadastrada com sucesso!');
};


let valor = 'nome';
let p1 = {
    nome: 'João da Silva',
    cpf: '11122233355',
    nascimento: '2026-09-02',
    matricula: '123456789',
    [valor]: 'Maria',
};



