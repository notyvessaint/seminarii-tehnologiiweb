const aniNastere = [2005, 1999, 2010, 1985, 2008, 1990];
const anulCurent = new Date().getFullYear();
const varste = aniNastere.map(an => anulCurent - an);
const varstePeste18 = varste.filter(varsta => varsta > 18);

console.log(varstePeste18);