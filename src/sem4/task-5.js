function increaseSalary(salaries, percent) {
  if (!Array.isArray(salaries)) {
    throw new TypeError("first param must be an array");
  }

  if (typeof percent !== "number" || isNaN(percent)) {
    throw new TypeError("second param must be a procent (as number)");
  }

  if (!salaries.every(s => typeof s === "number")) {
    throw new TypeError("all values must be numbers");
  }

  return salaries.map(s => s + (s * percent / 100));
}

try {
  const salarii = [3000, 4000, 5000];
  const marite = increaseSalary(salarii, 10);
  console.log(marite);
} catch (e) {
  console.error(e.message);
}