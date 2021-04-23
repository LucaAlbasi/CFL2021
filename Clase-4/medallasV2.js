let readlineSync = require("readline-sync");
let posicionLlegada = readlineSync.questionInt("Ingrese su posicion de llegada:");
switch (posicionLlegada) {
    case 1:
        console.log("Entregar medalla de oro");
        break;
    case 2:
        console.log("Entregar medalla de plata");
        break
    case 3: 
        console.log("Entregar medalla de bronce");
        break
    default:
        console.log("Entregar diploma de participasion");
        break;
}