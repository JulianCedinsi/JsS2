'use strict'

//EJERCICIO8
let array=[];
let cantidad=0;
let valor=0;
var min=0;

cantidad=parseFloat(prompt(`Ingrese la cantidad de sueldos que desea ingresar`,"0"));
function CapturaDatos(){
    for(let i=1;i<=cantidad;i++){
        valor=parseFloat(prompt(`Ingrese el sueldo ${i}`,"0"));
        array.push(valor);
    }
}

function DeterminarMenor(){
    min = Math.min(...array) 
    return min;
 }
 CapturaDatos();
 let res=DeterminarMenor();
alert("De los "+cantidad+ " sueldos que ingresó "+ array+" el menor es "+res);
