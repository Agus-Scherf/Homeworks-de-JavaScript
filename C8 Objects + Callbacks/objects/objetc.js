var persona = {
nombre: 'agustin',
apellido: 'scherf',
edad: 19,
direccion:'tucuman',
hombre: true,
mascotas:
    {
nombre:'luli',
raza: 'caniche'
},

saludar: function(saludo){
    return saludo + "agustin"
}
}

// DOT NOTATION APLICO CUANDO CONOZCO LA PROPIEDAD DEL OBJETO
console.log(persona.mascotas.raza)

// BRACKET-NOTATION APLICO CUANDO NO CONOZCO LA PROP DEL OBJETO
// console.log(persona['mascotas']["nombre"])
// LOS OBJETOS PUEDDEN TENER FUNCIONES
console.log(persona.saludar ('hola ' ))
// hasOwnProperty es para verificar si existe o no una determinda propiedad en el objeto
console.log(persona.hasOwnProperty("mascotas"))
// Object.keys devuelve las propiedas del objeto oredenadas en un arrays
console.log(Object.keys(persona))
console.log(persona["mascotas"]["raza"])