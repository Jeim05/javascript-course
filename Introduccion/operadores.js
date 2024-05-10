// Los operadores se dividen en diferentes categorias:

/* - Operadores Aritmeticos
 = Operador de asignación
 + Suma
 - Resta
 * Multiplicacion
 / Division
 % Modulo
 ++ Aumento
 -- Disminución
*/ 

// const resultado = 10 / 3; // Esta nos va a dar el resultado entero de la dicvisión
// const resultado2= 10 % 10 ; // Para obtener el sobrante de la division cuando hay decimales


/* Operadores de Asignación
 += Suma un numero al valor de una variable
 -= Resta un numero al valor de una variables
 *= Multiplica un numero al valor de una varible
 /= Divide un numero al valor de una varible
 %= Obtiene el sobrante de una divison y lo asigna a la variable
 */

 let numero = 10;
 numero /= 5;
 console.log(numero);

 /* Operadores de Comparacion
  == Igual que
  === Igual en valor y tipo de valor
  != Diferente
  !== Diferente en valor y diferente en tipo
  > Mayor que
  < Menor que
  >= Mayor o igual que
  <= Menor o igual que
  ? Operador ternario
  */

  // const resultado = 5 > 1; //true
  // const resultado = 10 === '10'; // false (compara si el valor es igual y si el tipo de dato tambien)
 const resultado = 7 > 10 ? 'El primer valor es mayor que el segundo' : 'El segundo valor es mayor que el primero';
 console.log(resultado);