function cenzureaza(text, dictionar) {
  const cuvinte = text.split(" ");

  const rezultat = cuvinte.map(cuvant => {
    if (dictionar.includes(cuvant.toLowerCase())) {
      if (cuvant.length <= 2) return cuvant; // nu are sens să cenzurăm cuvinte de 1-2 litere
      return cuvant[0] + "*".repeat(cuvant.length - 2) + cuvant[cuvant.length - 1];
    }
    return cuvant;
  });

  return rezultat.join(" ");
}

const text = "javascript este minunat";
const dictionar = ["este"];

const rezultat = cenzureaza(text, dictionar);
console.log(rezultat);