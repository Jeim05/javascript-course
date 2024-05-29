'use strict';

const producto$1 = document.getElementById("producto");
const productoImgen = producto$1.querySelector(".producto__imagen"); // Dentro de la seccion de producto accedemos al contenedor de las imagenes
const thumbs = producto$1.querySelector(".producto__thumbs");

// Color
const propiedadColor = producto$1.querySelector("#propiedad-color");

// Cantidad
const btnDisminuirCantidad = producto$1.querySelector("#disminuir-cantidad");
const btnIncrementarCantidad = producto$1.querySelector("#incrementar-cantidad");
const inputCantidad = producto$1.querySelector("#cantidad");

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

// Accedemos a los botones que me permiten abrir el carrito
const botonesAbrirCarrito = document.querySelectorAll('[data-accion="abrir-carrito"]');
const botonesCerrarCarrito = document.querySelectorAll('[data-accion="cerrar-carrito"]');
const ventanaCarrito = document.getElementById("carrito");
const btnAgregarCarrito = document.getElementById('agregar-al-carrito');
const producto = document.getElementById('producto');

const renderCarrito = () => {
  // PARA ABRIR LA VENTA
  ventanaCarrito.classList.add("carrito--active");
};

// Abrir carrito
botonesAbrirCarrito.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    renderCarrito();
  });
});

// Cerrar carrito
botonesCerrarCarrito.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    ventanaCarrito.classList.remove("carrito--active");
  });
});

// Agregar productos al carrito
btnAgregarCarrito.addEventListener('click', (e) => {
  producto.dataset.productoId;
  producto.querySelector('.producto__nombre').innerText;
  parseInt(producto.querySelector('#cantidad').value);
  producto.querySelector('#propiedad-color input:checked').value;
  producto.querySelector('#propiedad-tamaño input:checked').value;

  
});
