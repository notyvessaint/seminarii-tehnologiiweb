function sorteazaDupaCheie(array, cheie) {
  return array.slice().sort((a, b) => {
    if (a[cheie] < b[cheie]) return -1;
    if (a[cheie] > b[cheie]) return 1;
    return 0;
  });
}

const persoane = [
  { nume: "Ana", varsta: 25 },
  { nume: "Ion", varsta: 30 },
  { nume: "Maria", varsta: 22 }
];

console.log(sorteazaDupaCheie(persoane, "varsta"));