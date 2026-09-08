function meuForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    // Passa o elemento atual, o índice e o array original como parâmetros
    callback(array[i], i, array);
  }
}

// Teste:
meuForEach([10, 20, 30], (item, index) => {
  console.log(`Posição ${index}: ${item}`);
});