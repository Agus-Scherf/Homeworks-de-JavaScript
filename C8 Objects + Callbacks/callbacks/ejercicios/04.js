function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // NOTA: no debes retornar nada.
   // Tu código:

   var resultado = arrayOfNumbers.reduce(function(acum, item){
       return (acum = acum + item );
   });
   return cb(resultado)
}

module.exports = sumarArray;
