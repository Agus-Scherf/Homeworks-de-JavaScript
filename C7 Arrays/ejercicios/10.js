function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  // var arreglo = array 
  // var stringConMasDeCincoCaracteres = array.find ( array, elementos.length > 5)
  //  if (stringConMasDeCincoCaracteres === undefined) {
  //   return undefined
  //  } else return stringConMasDeCincoCaracteres
 
  for (let i = 0; i < array.length; i++) {
    console.log("Elemento actual:", array[i]);
    console.log("Longitud del elemento actual:", array[i].length);
    if (typeof array[i] === 'string' && array[i].length > 5) {
        console.log("String largo encontrado:", array[i]);
        return array[i];
    }
}
console.log("Ningún string largo encontrado");
return undefined;
}
console.log(obtenerPrimerStringLargo(['hello', 'world', 'this', 'is', 'a', 'test']));
module.exports = obtenerPrimerStringLargo;
