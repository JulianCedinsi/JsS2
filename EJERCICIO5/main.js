'use strict'

//EJERCICIO5
let array=[];
let contador=0;
function LeerPrimerosCincuenta(){
    for(let i=1;i<=50;i++){
        array.push(i);
    }
}
 function DeterminarMultiplos(){
    array.forEach(element => {
        let resultado = element % 3;
            if(resultado==0){
                contador=contador+1;
            }
    });
 }
 LeerPrimerosCincuenta();
 DeterminarMultiplos();

alert("En los primeros 50 números existen : "+ contador+" números múltiplos de 3");
