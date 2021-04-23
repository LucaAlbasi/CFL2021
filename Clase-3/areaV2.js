let readlineSync = require("readline-sync");
let Base = readlineSync.questionInt("Ingrese la base:");
let Altura = readlineSync.questionInt("Ingrese la altura:");
let Resultado = Base * Altura;
console.log("Este es el resultado:", Resultado)