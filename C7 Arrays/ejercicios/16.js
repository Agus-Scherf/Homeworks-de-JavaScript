function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  var resultados = [];

  for (var i = 0; i < array.length; i++) {
      resultados.push(array[i] * i);
  }

  return resultados;
 
}
multiplicarElementosPorIndice ([1, 2, 3, 4, 5, 6])
module.exports = multiplicarElementosPorIndice;
