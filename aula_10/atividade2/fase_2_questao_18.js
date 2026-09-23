const lista = [4, 8, 12, 16];

// Evitando mutação com spread
const copia = [...lista];
const r = copia.splice(1, 2);

console.log("Original inalterado:", lista);
console.log("Removidos da cópia:", r);