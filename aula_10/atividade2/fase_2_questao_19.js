const pessoas = [
  { nome: 'Ana', cidade: 'SP' },
  { nome: 'Lucas', cidade: 'RJ' },
  { nome: 'Bruna', cidade: 'SP' },
  { nome: 'Caio', cidade: 'MG' }
];

const agrupado = pessoas.reduce((acc, pessoa) => {
  const { cidade } = pessoa;
  if (!acc[cidade]) acc[cidade] = [];
  acc[cidade].push(pessoa);
  return acc;
}, {});

console.log(agrupado);