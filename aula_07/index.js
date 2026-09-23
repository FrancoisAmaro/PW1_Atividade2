let numeros = [1,4,8];
numeros.forEach(() => {}); //Sem retorno
let novaLista = numeros.map(() => {}); // Retorna uma nova lista com a mesma quantidade de itens da original.
let novaListaFilter = numeros.filter(() => {}); // Retorna uma nova lista com a quantidade de itens igual ou 
// menor que a original.
numeros.reduce(() => {}, 0); // Retorna um único valor, que pode ser do mesmo tipo ou não do array original.


/* let novaListaFilter = numeros.filter(() => {}); // Retorna uma nova lista com a quantidade igual ou menor que a lista original.
// let numeros = [1, 4, 8];

let numerosFiltrados = numeros.filter((num) => num >=1);
const NOTA_ALTA = 7;
let notas = [5, 7, 8.5];
let notasAltas = notas.filter((nota, i) => {
  console.log(i);
    return nota >= NOTA_ALTA;
});
console.log(notasAltas);
*/

/* conta totalSoma = numeros.reduce(() => {}, 0); // Somente um elemento.

