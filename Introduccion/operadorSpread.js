/* Operador Spread 
Permite tomar los elementos de un arreglo u objeto y expandirlos en otro sitio.
*/
const frutas = ["Manzana", "Pera", "Piña", "Melon"];
const comidaFavorita = ["Pizza", "Arroz con pollo", ...frutas];
console.log(comidaFavorita);

const datosLogin = {
  correo: "correo@correo.com",
  password: "123",
};

const usuario = {
  nombre: "Jeimmy",
  ...datosLogin,
  edad: 23,
};

/* Parametros Rest
Permite que una función contenga un numero indefinido de argumentos.
Los argumentos extra que encuentre los convertira en  arreglo.
*/

const registrarUsuario = (nombre, correo, ...datosAdicionales) => {
  console.log(nombre, correo, datosAdicionales);
};

registrarUsuario("Carlos", "correo@correo.com");
registrarUsuario("Cecilia", "correo@correo.com", 28, "España");

/* Destruccion de objetos
  Nos permite obtener elementos o propiedades de un arreglo u objeto y guardarlo en una variable 
*/
const amigos = ["Maria", "Estefany", "Hannia"];
const [primerAmigo, segundoAmigo, tercerAmigo] = amigos;


