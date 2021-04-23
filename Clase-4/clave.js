let readlineSync = require("readline-sync");
let usuario = readlineSync.question("Ingrese su USUARIO:");
let clave = readlineSync.question("Ingrese su CLAVE:");
let usuarioValido = "Juan"
let claveValida = "ClaveJuan"
    if (usuario == usuarioValido && clave == claveValida){
        console.log("Ingreso al sistema valido");
    }else{
        console.log("Ingreso no valido")
    }