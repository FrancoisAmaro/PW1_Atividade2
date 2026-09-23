const arr = [10, 15, 22, 34, 45, 60];
let processado = 0;

for (let i = 0; i < arr.length; i++) {
  const n = arr[i];
  if (n % 3 === 0) {
    const obj = { original: n, metade: n / 2 };
    processado += obj.metade;
  }
}

console.log(processado); // 60