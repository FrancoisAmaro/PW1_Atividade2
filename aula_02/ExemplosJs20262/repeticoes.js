let alunos = ['Maria', 'João', 'José'];
alunos.push('Marcos');
console.log(alunos);

// for
// in
for (let i in alunos) {
  console.log(i);
}
// of
for (let aluno of alunos) {
  console.log(aluno);
}
// convencional
for (let i = 0; i < alunos.length; i++) {
  console.log(alunos[i]);
}

let idades1 = [18, 20, 30, 15];
// let idades2 = idades1; // atribuição por referência
let idades2 = []; // atribuição por cópia
for (let idade of idades1) {
  idades2.push(idade);
}

// let idades2 = [...idades1];

idades2.push(26);
console.log(idades1);
console.log(idades2);
