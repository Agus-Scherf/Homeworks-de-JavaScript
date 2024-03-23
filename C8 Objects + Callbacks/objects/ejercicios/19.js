function pasarUsuarioAPremium(objetoMuchosUsuarios) {
  // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
  // Cada usuario tiene una propiedad llamada "esPremium".
  // Define esta propiedad de todos los usuarios como true.
  // Retornar el arreglo.
  // Tu código:

  for (let usuario of objetoMuchosUsuarios) {
    // Define la propiedad "esPremium" como true para cada usuario
    usuario.esPremium = true;
  }
  // Retorna el arreglo con las propiedades "esPremium" definidas como true para todos los usuarios
  return objetoMuchosUsuarios;
}
   
    // for (let i = 0; i < objetoMuchosUsuarios.length; i++) {
    //   objetoMuchosUsuarios[i].esPremium = true
    // }
    // return objetoMuchosUsuarios;
    






const users = [
  { esPremium: false },
  { esPremium: false },
  { esPremium: false },
  { esPremium: false },
  { esPremium: false },
];


pasarUsuarioAPremium(users)
module.exports = pasarUsuarioAPremium;
