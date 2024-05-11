/* .indexOf()
  Obtenemos el primer index de un elemento 
  Si no hay elementos no retorna -1 
 */

const colores = ["Rojo", 123, "Verde", "Azul"];
//console.log(colores.indexOf("Rojo"));

/* .lastIndexOf()
  Obtenemos el último index de un elemento
*/

/* .forEach()
   Nos permite ejecutar una función por cada elemento
*/
colores.forEach((nombre, index) => {
  //console.log(`${index} Mi color es ${nombre}`);
});

/* .find()
   Nos permite recorrer un arreglo y deveulve el primer elemennto que retornemos.
 */

colores.find((color) => {
  //console.log(color);
  //console.log(color[0])
});

/* .map()
   Nos permite ejecutar una funcion por cada elemento y crear un nuevo arreglo
*/

/* .filter()
   Nos permite ejecutar una funcion por cada elemento y 
   luego crear un arreglo en base a los resultados de esa función
*/
// Ejemplo, si queremos acceder solo a colores que tienen 4 letras
const colorFourWords = colores.filter((colors) => {
  if (colors.length === 5) {
    return colors;
  }
});

//console.log(colorFourWords);

/* .includes()
   Nos permite saber si el arreglo contiene un elemento especificado
*/
//console.log(colores.includes('Verde'));

/* .every
   Nos permite ejecutar un condicional sobre cada elemento y nos
   devuelve true si TODOS los elementos cumplieron la condicion
*/

const coloresValidos = colores.every((color) => {
  if (typeof color == "string") {
    return true;
  } else {
    return false;
  }
});
// console.log('¿Todos los colores son validos? ' + coloresValidos);

/* .some()
   Nos permite ejecutar un condicional sobre cada elemento y nos deveulve
   true si algun elemento cumplio la condicion 
 */
const coloresVal = colores.some((color) => {
  if (typeof color != 'string') {
    return true;
  } else {
    return false;
  }
});
console.log("¿El arreglo es invalido? " + coloresVal);
