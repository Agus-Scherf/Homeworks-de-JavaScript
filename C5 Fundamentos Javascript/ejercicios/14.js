function tienenMismaLongitud(str1, str2) {
  // La función recibe dos argumentos "str1" e "str2" que son strings.
  // Retorna true si los dos strings tienen la misma longitud.
  // De lo contrario, retorna false.
  // Tu código:

  var strinConLongitud1 = str1.length;
  var strinConLongitud2 = str2.length;
  
  if (strinConLongitud1 == strinConLongitud2) {
    return true;
  } else if (strinConLongitud1 != strinConLongitud2) {
    return false;
  }
}

module.exports = tienenMismaLongitud;