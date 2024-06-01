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

var data = {
  productos: [
    {
      id: "1",
      nombre: "Tennis Converse Standard",
      descripcion: "Lorem ipsum dolor sit amet.",
      precio: 500.0,
      colores: ["negro", "rojo", "amarillo"],
      tamanos: ["5", "6", "7", "8", "9"],
    },
    {
        id: "2",
        nombre: "Tennis Converse 2000",
        descripcion: "Lorem ipsum dolor sit amet.",
        precio: 250.0,
        colores: ["negro", "rojo", "amarillo"],
        tamanos: ["5", "6", "7", "8", "9"],
      },
  ],
  
};

// Accedemos a los botones que me permiten abrir el carrito
const botonesAbrirCarrito = document.querySelectorAll(
  '[data-accion="abrir-carrito"]'
);
const botonesCerrarCarrito = document.querySelectorAll(
  '[data-accion="cerrar-carrito"]'
);
const ventanaCarrito = document.getElementById("carrito");
const btnAgregarCarrito = document.getElementById("agregar-al-carrito");
const producto = document.getElementById("producto");
let carrito = [];
const formatearMoneda = new Intl.NumberFormat("es-CR", {
  style: "currency",
  currency: "CRC",
});

const renderCarrito = () => {
  // PARA ABRIR LA VENTA
  ventanaCarrito.classList.add("carrito--active");

  // Se eliminan los productos anteriores para construir el carrito desde cero
  const productosAnteriores =
    ventanaCarrito.querySelectorAll(".carrito__producto");
  productosAnteriores.forEach((producto) => {
    producto.remove();
  });

  // Iteramos por el carrito para mostrar los productos
  carrito.forEach((productoCarrito) => {
    // Obtenemos el precio del archivo de producto.js
    // Cuando el id del item del carrito sea el mismo de la lista
    data.productos.forEach((productoBaseDatos) => {
      if (productoBaseDatos.id === productoCarrito.id) {
        productoCarrito.precio = productoBaseDatos.precio;
      }
    });

    // Variable para obtener la ruta de la imagen
    let thumbSrc = producto.querySelectorAll(".producto__thumb-img")[0].src;
    if (productoCarrito.color === "rojo") {
      thumbSrc = "./img/thumbs/rojo.jpg";
    } else if (productoCarrito.color === "amarillo") {
      thumbSrc = "./img/thumbs/amarillo.jpg";
    }

    // Creamos una plantilla del codigo HTML
    const plantillaProducto = `
  <div class="carrito__producto-info">
    <img src="${thumbSrc}" alt="" class="carrito__thumb" />
    <div>
      <p class="carrito__producto-nombre">
        <span class="carrito__producto-cantidad">${
          productoCarrito.cantidad
        } x </span>${productoCarrito.nombre}
      </p>
      <p class="carrito__producto-propiedades">
        Tamaño:<span>${productoCarrito.tamano}</span> Color:<span>${
      productoCarrito.color
    }</span>
      </p>
    </div>
  </div>
  <div class="carrito__producto-contenedor-precio">
    <button class="carrito__btn-eliminar-item" data-accion="eliminar-item-carrito">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path
          d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"
        />
      </svg>
    </button>
    <p class="carrito__producto-precio">${formatearMoneda.format(
      productoCarrito.precio * productoCarrito.cantidad
    )}</p>
  </div>
    `;

    const itemCarrito = document.createElement("div");

    // Le agregamos a la clase de carrito__producto
    itemCarrito.classList.add("carrito__producto");

    itemCarrito.innerHTML = plantillaProducto;

    // Agregamos el producto a la ventana del carrito
    ventanaCarrito.querySelector(".carrito__body").appendChild(itemCarrito);
  });
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
btnAgregarCarrito.addEventListener("click", (e) => {
  const id = producto.dataset.productoId;
  const nombre = producto.querySelector(".producto__nombre").innerText;
  const cantidad = parseInt(producto.querySelector("#cantidad").value);
  const color = producto.querySelector("#propiedad-color input:checked").value;
  const tamano = producto.querySelector(
    "#propiedad-tamaño input:checked"
  ).value;

  if (carrito.length > 0) {
    let productoCarrito = false;

    carrito.forEach((item) => {
      if (
        item.id === id &&
        item.nombre === nombre &&
        item.color === color &&
        item.tamano === tamano
      ) {
        item.cantidad += cantidad;
        productoCarrito = true;
      }
    });
    if (!productoCarrito) {
      carrito.push({
        id: id,
        nombre: nombre,
        cantidad: cantidad,
        color: color,
        tamano: tamano,
      });
    }
  } else {
    carrito.push({
      id: id,
      nombre: nombre,
      cantidad: cantidad,
      color: color,
      tamano: tamano,
    });
  }
});

// Botones eliminar producto del carrito
ventanaCarrito.addEventListener("click", (e) => {
  if (e.target.closest("button")?.dataset.accion === "eliminar-item-carrito") {
    const producto = e.target.closest(".carrito__producto");
    // Usamos los corchetes para decir que agrupe todos los elementos en una lista y no en un nodo
    const indexProducto = [
      ...ventanaCarrito.querySelectorAll(".carrito__producto"),
    ].indexOf(producto);

    carrito = carrito.filter((item, index) => {
      if (index !== indexProducto) {
        return item;
      }
    });

    renderCarrito();
  }
});
