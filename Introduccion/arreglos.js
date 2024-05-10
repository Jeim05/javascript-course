const arreglo = ["Texto", 456.1, false, { propiedad: "valor" }, [1, 2, 3]];
console.log(arreglo);

// Para acceder a algun elemento
const amigos = ["Alejandro", "Manuel", "Cesar"];
console.log(amigos[1]);

const colores = [];
colores[0] = "Rojo";
colores[1] = "Verde";
colores[3] = "Blanco";

console.log('El arreglo tiene: '+ colores.length + ' colores');

colores.push('Azul');
console.log(colores);