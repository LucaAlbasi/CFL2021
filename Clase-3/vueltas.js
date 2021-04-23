let readlineSync = require("readline-sync");
let primeraVuelta = readlineSync.questionInt("Tiempo de la primera vuelta:");
let segundaVuelta = readlineSync.questionInt("Tiempo de la segunda vuelta:");
let terceraVuelta = readlineSync.questionInt("Tiempo de la tercera vuelta:");
let cuartaVuelta = readlineSync.questionInt("Tiempo de la cuarta vuelta:");
let tiempoTotal = (primeraVuelta + segundaVuelta + terceraVuelta + cuartaVuelta);
console.log("Tiempo total:", tiempoTotal);
console.log("Promedio de tiempo por vuelta:", tiempoTotal/4);