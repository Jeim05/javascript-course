const usuario = {
  nombre: "Juan",
  edad: 23,
  amigos: ["Jose", "Daniel", "Enrique"],
  saludo: () => {
    console.log("Hola");
  },
};

/* Metodos propios o presonalizados
   Los objetos pueden tener metodos personalizados, que vienen siendo
   los que uno crea, como por ejemplo con saludo para imprimir en consola
*/

usuario.saludo();

/* Object.keys() 
   Me devuelve un arreglo con las llaves del objeto
*/
const results = Object.keys(usuario);
console.log(results);

/* Object.values() 
   Me devuelve un arreglo con los valores del objeto
*/


/* Object.entries()
    Me devuelve un arreglo con las parejas de clave y valor del objeto
*/
