function reduce(array, reducer, valoareInitiala) {
  let acumulat = valoareInitiala;
  let startIndex = 0;

  if (acumulat === undefined) {
    acumulat = array[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < array.length; i++) {
    acumulat = reducer(acumulat, array[i], i, array);
  }

  return acumulat;
}

const numere = [1, 2, 3, 4];
const suma = reduce(numere, (acc, val) => acc + val, 0);
console.log("Suma:", suma);