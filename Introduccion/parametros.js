/* 
- Parametros: Los valores especificados en la definición
- Argumentos: los valores que le pasamos a la función cuando la invocamos
*/

// Los parametros nos permiten tener una funcion dinamica
const saludo = (nombre = "amigo") => {
  console.log(`Hola ${nombre}`);
};

/* saludo("Carlos");
saludo("Alex");
saludo(); */ // En un caso en que no se le pase nada a la función, se puede declarar un valor por defecto, como lo vemos en la linea 7

/* 
 Multiples parametros
*/
const operacion = (tipo, numero1, numero2) => {
  //console.log(numero1 + numero2);
  if (tipo === "suma") {
    console.log(numero1 + numero2);
  } else if (tipo === "resta") {
    console.log(numero1-numero2);
  }
};

operacion("suma", 100, 125);
operacion("resta", 456, 120);
