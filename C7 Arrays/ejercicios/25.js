function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:

  let contadorPares = 0;

  // Itera sobre cada elemento del arreglo
  for (let i = 0; i < array.length; i++) {
      // Verifica si el número actual es par
      if (array[i] % 2 === 0) {
          contadorPares++; // Incrementa el contador de pares si es par
      }
  }

  return contadorPares;
}


  
  


module.exports = contarParesConContinue;
