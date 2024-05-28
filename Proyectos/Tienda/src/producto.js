const producto = document.getElementById("producto");
const productoImgen = producto.querySelector(".producto__imagen"); // Dentro de la seccion de producto accedemos al contenedor de las imagenes
const thumbs = producto.querySelector(".producto__thumbs");

// Color
const propiedadColor = producto.querySelector("#propiedad-color");

// Cantidad
const btnDisminuirCantidad = producto.querySelector("#disminuir-cantidad");
const btnIncrementarCantidad = producto.querySelector("#incrementar-cantidad");
const inputCantidad = producto.querySelector("#cantidad");

// Funcionalidad de las thumbnails
thumbs.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    // Validamos para que solo haga accion cuando se haga click sobre la img
    const imagenSrc = e.target.src; //Accedemos a la ruta de la imagen

    const lastIndex = imagenSrc.lastIndexOf("/"); // Permite acceder a la ubicacion de la ultima /

    // Cortamos una parte del texto, en este caso solo el nombre de la imagen desde la ruta
    const nombreImagen = imagenSrc.substring(lastIndex + 1);

    // Cambiamos la ruta de la imagen del producto
    productoImgen.src = `./img/tennis/${nombreImagen}`;
  }
});

// Aqui lo que vamos a hacer es cargar la imagen de otro color de las tenis
propiedadColor.addEventListener("click", (e) => {
  if (e.target.tagName == "INPUT") {
    productoImgen.src = `./img/tennis/${e.target.value}.jpg`;
  }
});

//
btnIncrementarCantidad.addEventListener("click", (e) => {
  inputCantidad.value = parseInt(inputCantidad.value) + 1;
});

btnDisminuirCantidad.addEventListener("click", (e) => {
  if (parseInt(inputCantidad.value) > 1) {
    inputCantidad.value = parseInt(inputCantidad.value) - 1;
  }
});
