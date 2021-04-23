let readlineSync = require("readline-sync");
let sueldoActual = readlineSync.questionFloat("Ingrese el salario actual del empleado:")
let nuevoSueldo
    if (0 < sueldoActual && sueldoActual <= 15000){
        nuevoSueldo = sueldoActual * 1.2;
            console.log ("Usted tiene un aumento del 20%.");
            console.log ("Este es su nuevo sueldo:", nuevoSueldo);
    }else if (15001 < sueldoActual && sueldoActual <= 20000){
        nuevoSueldo = sueldoActual * 1.1;
            console.log ("Usted tiene un aumento del 10%.");
            console.log ("Este es su nuevo sueldo:", nuevoSueldo);
    }else if (20001 < sueldoActual && sueldoActual <= 25000){
        nuevoSueldo = sueldoActual * 1.05;
            console.log ("Usted tiene un aumento del 5%.");
            console.log ("Este es su nuevo sueldo:", nuevoSueldo);
    }else{
        nuevoSueldo = sueldoActual
        console.log ("Usted no tiene aumento.");
    }