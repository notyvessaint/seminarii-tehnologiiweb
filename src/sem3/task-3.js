function formateaza(template, params) {
  return template.replace(/{(\w+)}/g, (match, key) => {
    return key in params ? params[key] : match;
  });
}

const sablon = "un {substantiv} este {adjectiv}";
const valori = { substantiv: "căluț", adjectiv: "drăguț" };

const rezultat = formateaza(sablon, valori);
console.log(rezultat);