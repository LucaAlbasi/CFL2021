let readlineSync = require("readline-sync");
let primerNumero = readlineSync.questionInt("Ingrese el primer numero:");
let segundoNumero = readlineSync.questionInt("Ingrese el segundo numero:");
console.log("El primer numero es:", primerNumero);
console.log("El segundo numero es:", segundoNumero);
let Resultado = primerNumero + segundoNumero;
console.log("Este es el resultado:",Resultado);