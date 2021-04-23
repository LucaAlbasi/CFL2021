let readlineSync = require("readline-sync");
let numero = readlineSync.questionFloat("Ingrese un numero:");
if((numero % 2) == 0){
    console.log("Es par:"+ numero);
  }else{
    console.log("Es impar:"+ numero);
  }