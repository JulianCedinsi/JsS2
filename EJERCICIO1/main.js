'use strict'

//EJERCICIO1

let array=[];
let arraypares=[];

function LlenarArray(){
    for(let i=0;i<=99;i++){
        array.push(Math.floor(Math.random()*1000));
    }
}
LlenarArray();
function DefinirPares(){
    for(let i=0;i<=99;i++){
        if(array[i]%2==0){
            arraypares.push(array[i]);
        }
    }
}
LlenarArray();
DefinirPares();
alert("El arreglo original es :"+ array);
alert("Los números pares del arreglo son :"+ arraypares);