/* .toString() - Convierte un numero a un string  */
const numero = 10;
console.log(numero, typeof numero);

const texto = numero.toString();
console.log(numero, typeof texto);

/* .toFixed() - Permite obtener un numero con la cantidad de decimales especificados  */
const number = 3.1415;
console.log(number.toFixed(2));

/* parseInt() - Intenta transformar un valor a un entero  */
const numero1 = parseInt(prompt('Escriba un numero'));
const numero2 = parseInt(prompt('Escriba un numero'));
console.log(numero1 + numero2);

/* parseFloat() - Intenta transformar un valor a un numero con decimales  */

/* Math.random()
Genera un numero al azar entre  0 y 1
*/
const numeroRandom = Math.random();
console.log(numeroRandom)

/* Math.floor()
Redondea hacia abajo un numero
*/

/* Math.ceil()
Redondea hacia arriba un numero
*/

/* Math.round()
Redondea hacia el entero mas cercano
*/

/* Ejemplo de numero al azar de 0 a 100  */
 const num = Math.random();
console.log(Mth.floor(num *101));
