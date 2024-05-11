const colores = ["Rojo", "Verde", "Azul"];

/* .length 
   - Nos permite conocer la cantidad de elementos de un arreglo
*/

/* .toString()
   Nos permite transformar un arreglo a un texto.
   Por ejemplo para poder mostrarlo en el navegador
 */

/* .join
   Nos permite transformar un arreglo a una cadena de texto y separar cada elemento
    */

console.log(colores.join(" - "));

/* .sort()
   Nos permite ordenar un arreglo de cadenas de texto de forma alfabetica.
   En caso de que fueran numeros, tambien se pueden ordenar el menos al mayor
*/

/* .reverse
 Nos permite ordenar un arreglo de forma descendente
 */

/* .concat()
 Nos permite juntar dos arreglos en uno solo 
  */

/* .push()
 Nos permite agregar un elemento al final de un arreglo 
  */

/* .pop()
 Nos permite eliminar el ultimo elemento de un arreglo 
  */

/* .shift()
 Elimina el primer elemento de un arreglo y recorre los elementos
 */
const dias = ["Martes", "Miercoles", "Jueves", "Viernes", "Sabdo", "Domingo"];
console.log(dias);
const diasEliminado = dias.shift();

/* .unshift()
Arregla un elemento al inicio de la semana y empuja los elementos
*/

dias.unshift("Lunes");

/* .splice()
Nos permite insertar elementos a un arreglo donde lo especifiquemos 
- 1er parametro - Posicion donde queremos insertar los elementos.
- 2do parametro - Si queremos eliminar elementos del arreglo desde la posición indicada
- Resto de parametros - Los elementos a insertar 
 */

const amigos = ["Alejandro", "Cesar", "Manuel"];
amigos.splice(1, 2, "Rafael", "Roberto");

/* .slice()
Nos permite copiar una parte de un arrego a otro
- 1er parametro - Posicion desde donde queremos copiar
- 2do parametro - Hasta antes de que elemento copiar.
*/

