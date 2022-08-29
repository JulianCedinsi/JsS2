'use strict'

//EJERCICIO10
let array=[];
let tamano=0;
let valor=0;
let contador=0;

tamano=parseFloat(prompt(`Ingrese el tamaño del arreglo`,"0"));
function LlenadoArray(){
    for(let i=0;i<=tamano;i++){
        if(array[i-1]==0)
        {
            array.push(1);
        }else{
            array.push(0);
        }
    }
}

LlenadoArray();

alert("El arreglo resultante es "+array);
