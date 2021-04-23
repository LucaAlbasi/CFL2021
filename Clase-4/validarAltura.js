let readlineSync = require("readline-sync");
let alturaPersona = readlineSync.questionFloat("Cual es su altura:");
let alturaPermitida = 1.30
    if (alturaPersona >= alturaPermitida){
        console.log("Tiene la altura para ingresar al juego.")
    }else{
        console.log("No tiene la altura requerida para el juego")
    }