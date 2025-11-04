class SirPar {
  constructor(start) {
    this.curent = start % 2 === 0 ? start : start + 1;
  }

  next() {
    const valoareDeReturnat = this.curent;
    this.curent += 2;
    return valoareDeReturnat;
  }
}

const sir = new SirPar(5);
console.log(sir.next());
console.log(sir.next());
