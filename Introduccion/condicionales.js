//📌 Estructura de una condicional

/* if(true){
    Codigo a ejecutar
} */

// Ejemplo #1:
/* const usuario = {
    edad: 27,
    pais: 'Mexico',
    ticket: true
}; */

/* if(usuario.edad > 17  ){
    console.log('El usuario es mayor de edad y puede entrar al concierto');
}else{
    console.log('El usuario es menor de edad y no puede entrar');
} */

// Ejemplo #2
/* const usuario = {
    edad: 17,
    pais: 'Mexico',
    ticket: true
};

if(usuario.edad >=18 && usuario.ticket){
    console.log('El usuario es mayor de edad y tiene ticket');
} else{
    console.log('El usuario es menor de edad o no tiene un ticket');
} */

// Ejemplo #3 - Anidando condicionales
/* const usuario = {
  edad: 27,
  pais: "Mexico",
  ticket: false,
}; */

/* if (usuario.edad >= 18) {
  if (usuario.ticket) {
    console.log("El usuario es mayor de edad y tiene ticket.");
  } else {
    console.log("El usuario es mayor de edad, pero no tiene ticket");
  }
} else {
  console.log("El usuario es menor de edad");
} */

// Ejemplo #3 - elseif
const usuario = {
  edad: 27,
  pais: "mexico",
  ticket: false,
};

if (usuario.pais === "mexico") {
  console.log("El usuario  es mexicano");
} else if (usuario.pais === "colombia") {
  console.log("El usuario  es colombiano");
} else if (usuario.pais === "españa") {
  console.log("El usuario  es español");
} else {
  console.log("El usuario  es de otro país");
}
