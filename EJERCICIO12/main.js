'use strict'

//EJERCICIO12
var fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;
for (var i = 2; i < 100; i++) {
  fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
}
alert("La secuencia de fibonacci a 100 es "+fibonacci);
