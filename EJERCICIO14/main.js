'use strict'

//EJERCICIO14s
let array=[];
let cantidad=0;
let valor=0;
let contadorpositivo=0;
let contadornegativo=0;

cantidad=parseFloat(prompt(`Ingrese la cantidad de números que desea ingresar`,"0"));

function CapturaDatos(){
    for(let i=1;i<=cantidad;i++){
        valor=parseFloat(prompt(`Ingrese el número ${i}`,"0"));
        array.push(valor);
    }
}

function DeterminarPositivosNegativos(){
    array.forEach(element => {
        if(element>=0){
            contadorpositivo=contadorpositivo+1;
        }else{
            contadornegativo=contadornegativo+1;
        }
    });
 }
 CapturaDatos();
 DeterminarPositivosNegativos();
alert("De los "+cantidad+ " numeros que ingresó "+ contadorpositivo+" son positivos y "+contadornegativo+" son negativos.");
