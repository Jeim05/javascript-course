/* .length() 
Devuelve el numero de caracteres de una cadena de texto
*/
const texto = 'Hola, soy Jeimmy';
console.log(texto.length());

/* .indexOf  .lastIndexOf() - Devuelve el index del primer/ultimo elemento
*/

/* .slice() - Devuelve un fragmento de una cedena de texto  */
const index = texto.indexOf('s');
const lastIndex = texto.indexOf('s');
consoloe.log(texto.slice(index, lastIndex));

/* .replace() - Devuelve una cadena de texto donde reemplaza un valor por otro
1er parametro - el texto que queremos reemplazar
2do parametro - el nuevo texto que queremos poner
*/

/* .split() - Convierte una cadena de texto en un arreglo 
Tenemos que especificar donde cortar cada elememento

1er parametro - el caracter que funciona como separador
*/
console.log(texto.split(' '));

/* .toUpperCase() .toLowerCase() - Devuelve una cadena de texto en puras mayusculas o minusculas */
