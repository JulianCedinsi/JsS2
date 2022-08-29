'use strict'

//EJERCICIO11
let array=[];
let arraypares=[];
let tamano=0;
let j=2;

tamano=parseFloat(prompt(`Ingrese el tamaño del arreglo debe ser un número impar`,"0"));
ValidacionPar();

function TamanoArreglo(){
    tamano=parseFloat(prompt(`El valor anterior no es impar ingrese un de nuevo el tamaño del arreglo`,"0"));
    ValidacionPar();
}

function ValidacionPar(){
    if(DefinirPar(tamano)==false){
        TamanoArreglo();
    }else{
        LlenadoArrayPares();
        LlenadoArray();
    }
}



function LlenadoArray(){
    for(let i=1;i<=tamano;i++){
         array.push(arraypares[i]);
        }
    }

    function LlenadoArrayPares(){
        for(let i=0;i<=1000;i++){
                if((i)%2==0){
                    arraypares.push(i);
                }
            }
        }

function DefinirPar(valor){
    if(valor%2!=0){
        return true;
    }else{
        return false;
    }
}

alert("El arreglo resultante es "+array);
