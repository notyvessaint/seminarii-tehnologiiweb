function sumaDivizibile(array, divizor) {
  return array
    .filter(numar => numar % divizor === 0)
    .reduce((suma, numar) => suma + numar, 0);
}

const numere = [10, 15, 20, 33, 40, 7];
const divizor = 5;

const rezultat = sumaDivizibile(numere, divizor);
console.log(rezultat);