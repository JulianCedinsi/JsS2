'use strict'

//EJERCICIO3
let valor=0;
let res=0;
function TotalProductos(){
    for(let i=0;i<=9;i++){
        valor=parseInt(prompt("Ingrese el valor del producto "+i,"0"));
        
        res=res+valor;
    }
}

TotalProductos();

alert("El total de los productos es: "+ res);