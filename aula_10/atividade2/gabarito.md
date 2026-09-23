# Atividade 2 - Arraylist, Desestruturação e Espalhamento

## Fase 1
1. b) 5
2. c) ['maçã', 'banana']
3. a) [20, 30, 40]
4. b) [0, 1, 2, 3]
5. b) [6, 7]
6. b) [1, 4]
7. c) 2
8. b) [2, 4, 6]
9. c) [9, 12]
10. d) 12
11. a) true
12. c) 'a-b-c'
13. c) [1, 2, 3, 4, 5]
14. b) ['z', 'y', 'x']
15. c) 3

## Fase 2
- Questão 16:
  Passo 1 (filter): [1, 2, 3, 4, 5] filtra os ímpares gerando [1, 3, 5].
  Passo 2 (map): [1, 3, 5] multiplica por 3 resultando em [3, 9, 15].
  Passo 3 (reduce): 10 + 3 + 9 + 15 = 37.
  Resultado final impresso: 37.

- Questão 17:
  const arr = [10, 15, 22, 34, 45, 60];
  let processado = 0;
  for (let i = 0; i < arr.length; i++) {
    const n = arr[i];
    if (n % 3 === 0) {
      processado += (n / 2);
    }
  }
  console.log(processado); // 60

- Questão 18:
  O splice altera o array original diretamente na memória (mutação in-place).
  Solução 1: Utilizar slice (não mutável): const r = lista.slice(1, 3);
  Solução 2: Clonar antes de alterar: const copia = [...lista]; const r = copia.splice(1, 2);

- Questão 19:
  const agrupado = pessoas.reduce((acc, pessoa) => {
    const { cidade } = pessoa;
    if (!acc[cidade]) acc[cidade] = [];
    acc[cidade].push(pessoa);
    return acc;
  }, {});

- Questão 20:
  find: Retorna o primeiro valor que atende ao predicado (8).
  filter: Retorna um novo array com todos os valores correspondentes ([8, 8]).
  some: Retorna um valor booleano indicando se existe ao menos um (true).

## Fase 3
1. a) "Ana" { idade: 28, cidade: "SP" }
2. a) 1 3 [4, 5]
3. a) "RJ"
4. b) { a: 1, b: 3, c: 4 }
5. b) 25
6. c) [1, 2, 3, 4, 5]
7. a) "escuro" "Arial"
8. b) 32
9. a) "JS" "SQL"
10. b) 99

## Fase 4
11. b) 4 [[5, 6]]
12. a) "escuro" { nome: "Ana" }
13. a) 3 99
14. a) [2, 3, 1]
15. c) 100 200