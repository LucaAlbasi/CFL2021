let readlineSync = require ("readline-sync");
let numero = readlineSync.questionInt ("Ingrese un numero: ");
    while (numero <= 0){
        let numero = readlineSync.questionInt ("Ingrese un numero que se positivo: ");
    }
    if (numero %2 == 0){
        console.log("El numero es par.");
    }else{
        console.log("El numero es impar.")
    }