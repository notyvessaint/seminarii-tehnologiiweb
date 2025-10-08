function checkDivisible(n, divisor)
{
    return n % divisor === 0;
}

console.log(checkDivisible(10, 2));
console.log(checkDivisible(10, 3));

function numarCaractereDiferite(str1, str2)
{
    if (str1.length !== str2.length) return -1;
    let diferite = 0;

    for (let i = 0; i < str1.length; i++)
        if (str1[i] !== str2[i]) diferite++;

    return diferite;
};

console.log(numarCaractereDiferite('abc', 'abx'));

function occurencies(text, character)
{
    return text.split(character).length - 1;
}

console.log(occurencies('hello web', 'e'));

function creeazaArray(listaNumere) {
  return Array.from(listaNumere);
}

console.log(creeazaArray([1, 2, 3, 4]));

function addToArray(array, ...args)
{
    for(var i = 0; i < args.length; i++)
        array.push(args[i]);

    return array;
}

let array = ["a"];
console.log(addToArray(array, "b", "c").join(", "));

function intercaleazaArrayuri(array1, array2) {
    if(array1.length == array2.length)
    {
        const rezultat = [];

        for (let i = 0; i < array1.length; i++)
            rezultat.push(array1[i], array2[i]);

        return rezultat;
    }
}

console.log(intercaleazaArrayuri([1, 2, 3], ['a', 'b', 'c']).join(', '));

const checkPrime = (n) => {
    for(let i = 2; i <= Math.sqrt(n); i++)
    {
        if(!(n % i))
            return false;
    }

    return true;
}

function fibonacci(n)
{
   return n < 1 ? 0
        : n <= 2 ? 1
        : fibonacci(n - 1) + fibonacci(n - 2)
}

if(process.argv.length < 3)
    console.log("Please provide a number as argument");
else
    console.log(fibonacci(parseInt(process.argv[2])));


const sampleWords = 'the quick brown fox jumps over the lazy dog';

const getCounts = (text) => {
    const words = text.split(' ');
    const result = {};

    for(let word of words)
    {
        if(word in result)
            result[word]++;
        else
            result[word] = 1;
    }

    for(let word in result)
        result[word] /= words.length;

    return result;
}

const frecvente = (text) => {
    const frecvente = {};
    let totalLitere = 0;

    for(let char of text)
    {
        if(char !== ' ')
        {
            const litera = char.toLowerCase();
            frecvente[litera] = (frecvente[litera] || 0) + 1;
            totalLitere++;
        }
    }

    for(let litera in frecvente)
        frecvente[litera] /= totalLitere;

    return frecvente;
}

console.log(getCounts(sampleWords));
console.log(frecvente(sampleWords));