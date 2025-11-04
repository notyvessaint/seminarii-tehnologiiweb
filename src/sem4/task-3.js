function creeazaPowerMemoizat() {
  const memo = {};  

  function power(base, exp) {
    const key = `${base}^${exp}`;
    if (key in memo) {
      console.log(`(${key} = ${memo[key]})`);
      return memo[key];
    }

    if (exp === 0) return 1;
    if (exp === 1) return base;

    const half = Math.floor(exp / 2);
    const halfPower = power(base, half);

    let rezultat;
    if (exp % 2 === 0) {
      rezultat = halfPower * halfPower;
    } else {
      rezultat = base * halfPower * halfPower;
    }

    memo[key] = rezultat;
    console.log(`${key} = ${rezultat}`);
    return rezultat;
  }

  return power;
}

const power = creeazaPowerMemoizat();
console.log(power(2, 5));
console.log(power(2, 6));
console.log(power(2, 5));