'use strict'

//EJERCICIO9

let base=0;
let potencia=0;
let resultado=0;

base=parseFloat(prompt(`Ingrese la base`,"0"));
potencia=parseFloat(prompt(`Ingrese la potencia`,"0"));
function Elevar(){
    resultado=Math.pow(base,potencia);
}

 Elevar();

alert("El "+base+ "^"+ potencia+" = "+resultado);
