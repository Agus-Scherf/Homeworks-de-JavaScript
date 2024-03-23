function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:

  if (resultadosTest.length === 0) {
    return 0; 
}

var suma = 0;

for (var  i = 0; i < resultadosTest.length; i++) {
    suma += resultadosTest[i];
}

var promedio = suma / resultadosTest.length;

return promedio;


}

module.exports = promedioResultadosTest;
