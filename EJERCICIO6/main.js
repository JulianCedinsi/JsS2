'use strict'

//EJERCICIO6
let array=[];
let cantidadnotas=0;

let valor=0;
let resultadoaprobadas=0;
let resultadonoaprobadas=0;
cantidadnotas=parseFloat(prompt(`Ingrese la cantidad de notas a ingresar`,"0"));
function CapturaDatos(){
    for(let i=1;i<=cantidadnotas;i++){
        valor=parseFloat(prompt(`Ingrese la nota ${i}`,"0"));
        array.push(valor);
    }
}
 CapturaDatos();
alert("Las notas que ingresó son: "+ array);
