function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  
 var elementosVistos = new Set();

 for (var i = 0; i < numeros.length; i++) {
     if (elementosVistos.has(numeros[i])) {
         return numeros[i];
     } else {
         elementosVistos.add(numeros[i]);
     }
 }

 return undefined;



}
encontrarElementoRepetido([1, 2, 3, 3, 4, 5]),
module.exports = encontrarElementoRepetido;