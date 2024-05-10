/* Las variables son espacios en memoria que se utilizan para guardar información,
que la aplicación va a utilizar */

/* Tipos de datos que podemos guardar en las variables
  string
  number
  boolean
  object
  function

  null
  undefined
*/

// Forma antigua de definir variables
var edad = 27; // var daba muy poco alcance de la variable

//Otras formas de definir variable
// Con let y const se puede acceder a la variable desde un bloque
let nombre = 'Jeimmy'; // con let las variables se pueden sobreescribir o cambiar el valor
const correo = 'correo@micorreo.com' // Con const las variables no se puede sobreescribir


const resultado = 4 +4;
const nombre1 = 'Carlos '
const nombre2 = 'Arturo'
const nombreCompleto = nombre1 + nombre2;
console.log(nombreCompleto);

// En javascript las variables no solo guardan un solo valor, ejemplo
let miVariable = 'texto';
miVariable = 7;