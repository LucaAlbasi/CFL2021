let readlineSync = require("readline-sync");
let monto = readlineSync.questionFloat("Cual es el monto de la compra:");
let cantidad = readlineSync.questionFloat("Cuantos del mismo:")
let precioTotal = monto * cantidad
    if (precioTotal>=1000){
        let descuento = (precioTotal*10)/100;
        let montoConDescuento = precioTotal - descuento;
        console.log("Por gastar mas de 1000 tiene un descuento del 10%.");
        console.log("El monto a pagar es:", + montoConDescuento);
    }else{
        console.log("No tiene descuento.Su monto a pagar es:", + precioTotal);
    }