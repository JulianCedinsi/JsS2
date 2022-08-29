'use strict'

//EJERCICIO7
let array=[];
let cantidad=0;
let valor=0;
let contador=0;

cantidad=parseFloat(prompt(`Ingrese la cantidad de números que desea ingresar`,"0"));
function CapturaDatos(){
    for(let i=1;i<=cantidad;i++){
        valor=parseFloat(prompt(`Ingrese el número ${i}`,"0"));
        array.push(valor);
    }
}

function DeterminarImpares(){
    array.forEach(element => {
        if(element%2!=0){
            contador= contador+1;
        }
    });
 }
 CapturaDatos();
 DeterminarImpares();
alert("De los "+cantidad+ " numeros que ingresó "+ contador+" son impares.");
