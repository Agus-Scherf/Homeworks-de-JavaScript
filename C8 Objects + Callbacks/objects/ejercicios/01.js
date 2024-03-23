const obtenerValorPropiedad = (objeto, propiedad) => {
   // Recibe un objeto y el nombre de una propiedad.
   // Devuelve el valor de esta propiedad.
   // Tu código:
    // Verifica si la propiedad existe en el objeto
    if (objeto.hasOwnProperty(propiedad)) {
      return objeto[propiedad];
  } else {
      return undefined;

   
};
}

module.exports = obtenerValorPropiedad;
