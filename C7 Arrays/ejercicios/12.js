function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  if (array.length === 0) {
    return [];
}

for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'string') {
        array[i] = array[i].toUpperCase();
    }
}
return array;
}



module.exports = convertirStringAMayusculas;