let readlineSinc = require("readline-sync");
let monto = readlineSinc.questionFloat("Ingrese el monto:");
let montoConDescuento;
let descuento;
let cantidad = readlineSinc.questionFloat("Ingrese la cantidad:");
let precioTotal = (monto * cantidad);
let mes = readlineSinc.question("Ingrese el mes de la compra:");
    if(mes == "Octubre"){
        descuento = (precioTotal*15)/100
        montoConDescuento = precioTotal - descuento;
            console.log("Por su compra en este mes de Octubre tiene un Descuento del 15%.");
            console.log("El monto final a pagar con descuento es:", montoConDescuento);
    }else{
            console.log("Usted no tiene descuento, el monto final a pagar es:", precioTotal);
    }