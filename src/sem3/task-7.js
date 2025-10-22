function calculeazaMedia(numere) {
  if (numere.length === 0) return 0;

  const suma = numere.reduce((acc, val) => acc + val, 0);
  return suma / numere.length;
}

const valori = [10, 20, 30, 40];
const media = calculeazaMedia(valori);

console.log(media); 