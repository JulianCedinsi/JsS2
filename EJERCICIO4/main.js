'use strict'

//EJERCICIO4
let array=[];
let valor=0;
let resultadoaprobadas=0;
let resultadonoaprobadas=0;
function CapturaDatos(){
    for(let i=0;i<=11;i++){
        valor=parseFloat(prompt(`Ingrese la nota ${i+1}`,"0"));
        array.push(valor);
    }
}

 function DeterminarAprobadas(){
    array.forEach(element => {
        if(element>5){
            resultadoaprobadas= resultadoaprobadas+1;
        }else{
            resultadonoaprobadas= resultadonoaprobadas+1;
        }
    });
 }
 CapturaDatos();
 DeterminarAprobadas();

alert("Usted aprobó: "+ resultadoaprobadas);
alert("Usted no aprobó: "+ resultadonoaprobadas);