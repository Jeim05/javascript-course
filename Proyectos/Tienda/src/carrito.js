// Accedemos a los botones que me permiten abrir el carrito
const botonesAbrirCarrito = document.querySelectorAll('[data-accion="abrir-carrito"]');
const botonesCerrarCarrito = document.querySelectorAll('[data-accion="cerrar-carrito"]');
const ventanaCarrito = document.getElementById("carrito");
const btnAgregarCarrito = document.getElementById('agregar-al-carrito');
const producto = document.getElementById('producto');
const carrito = [];

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
  const id = producto.dataset.productoId;
  const nombre = producto.querySelector('.producto__nombre').innerText;
  const cantidad = parseInt(producto.querySelector('#cantidad').value);
  const color = producto.querySelector('#propiedad-color input:checked').value;
  const tamano = producto.querySelector('#propiedad-tamaño input:checked').value;

  
})
