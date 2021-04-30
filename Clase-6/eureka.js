let readlineSync = require("readline-sync");
let clave = readlineSync.question("Ingrese la clave: ");
let claveReal = "EUREKA";
let intentos = 1;
while ((clave != claveReal) && (intentos <=3)){
    intentos++;
    clave = readlineSync.question("Ingrese la clave: "+"Intentos: "+ intentos );
}
        if (clave == claveReal){
            console.log("Ingresaste con exito.");
        }else{
            console.log("Agotaste las posibilidades de ingresar.");
        }