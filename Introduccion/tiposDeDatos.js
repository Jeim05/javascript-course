/* Tipos de datos
   string - Cadena de Texto
   number - Numero
   boolena - Booleano
   object - Objeto
   function - Funcion

   null - Valor nulo
   undefined - Valor sin definir
 */

// Cadena de texto
// Formas de escribir cadenas de texto
const nombre = 'Carlos';
const parrafo = 'Este es un parrafo';
const parrafo2 = 'Este es un "parrafo"'; // Si se desea agregar comillas dobles dentro de un texto se hace as[i]
const parrafo3 = 'Este es un \'parrafo\''; // Para agregar comillas simples, dentro de comillas simples

// Booleano
 const mayorQue = 10 > 2;
 console.log(mayorQue);

// Arrays - Arreglos
// En javascript los arreglos pueden contener diferentes tipos de datos dentro de un mismo arreglo
const arreglo = ['texto', 456, true, {propiedad: 'valor'}, [1,2,3]];
console.log(arreglo);

// Objeto
const persona = {
    nombre: "Jeimmy",
    edad: 23,
    carro : {
        marca: 'Toyota',
        color: 'Negro'
    }
}

// Funtion - BLOQUES DE CODIGO QUE PODEMOS REUTILIZAR
function hola(){
    console.log('Hola');
}

hola(); // Hay que ejecutar la funcion para poder visualizarla