let readlineSync = require("readline-sync")
let numero1 = readlineSync.questionInt("Ingrese el primer numero:")
let numero2 = readlineSync.questionInt("Ingrese el segundo numero:")
let numero3 = readlineSync.questionInt("Ingrese el tercer numero:")
    if (numero1 >= numero2 && numero1 >= numero3){
        console.log("Este es el mayor:"+ numero1)
    }else
        if (numero2 >= numero1 && numero2 >= numero3){
            console.log("Este es el mayor:"+ numero2)       
    }else
        if (numero3 >= numero1 && numero3 >= numero2){
            console.log("Este es el mayor:"+ numero3)
    }