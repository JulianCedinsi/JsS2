'use strict'

//EJERCICIO13
let array=[];
let arraypares=[];
let sumador=0;

LlenadoArrayPares();
LlenadoArray();
SumaArray();


function LlenadoArray(){
    for(let i=1;i<=100;i++){
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

function SumaArray(){
    array.forEach(element => {
        sumador=sumador+element;
    });
}
alert("La suma de los 100 primeros pares es "+sumador);
