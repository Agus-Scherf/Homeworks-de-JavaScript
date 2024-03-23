function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
 var hoy = new Date
 if (Date >= fecha) {
  return true
 } else if ( Date <= "Invalid Date") {
  return false
 }

module.exports = esFechaValida;