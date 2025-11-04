function deepClone(obj) {
    if (obj === null || typeof obj !== 'object')
        return obj;

    if (obj instanceof Date)
        return new Date(obj.getTime());

    if (obj instanceof RegExp)
        return new RegExp(obj);

    if (Array.isArray(obj))
        return obj.map(item => deepClone(item));

    const clone = {};
    for (const key in obj)
        if (obj.hasOwnProperty(key))
            clone[key] = deepClone(obj[key]);

    return clone;
}

const original = {
  nume: "Ion",
  varsta: 21,
  adresa: {
    oras: "București",
    strada: "Tei",
  }
};

const copie = deepClone(original);
copie.adresa.oras = "Cluj";

console.log("Original:", original);
console.log("Copie:", copie);
