let readlineSync = require ("readline-sync");
let numero1 = readlineSync.questionInt ("Ingrese un numero: ");
let numero2 = readlineSync.questionInt ("Ingrese un numero: ");
let suma;
suma = 0;
    while (numero1 <= numero2){
        suma = suma + numero1;
        numero1++;
    }
    console.log ("El resultado es: ", suma);