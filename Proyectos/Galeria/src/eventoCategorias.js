/* En este parte lo que hacemos es darle un evento a las categorias
en este caso para ver más imagenes y información de cada uno de los continentes
*/
import dataFotos from "./datos/fotos";
//Primero, accedemos al contenedor de las categorias
const contenedorCategorias = document.getElementById("categorias");
const galeria = document.getElementById("galeria");

// Segundo agregamos el evento al elemento hijo de ese contenedor
// Se recibo el evento y una función con el parametro de evento
contenedorCategorias.addEventListener("click", (e) => {
  e.preventDefault(); // Previene el comportamiento que tiene por defecto el navegador. Con esto ya no me va a enviar a la parte superior del navegador

  if (e.target.closest("a")) {
    galeria.classList.add("galeria--active"); // Se agrega la clase que activa la galeria
    document.body.style.overflow = "hidden"; // Esto es para evitar que no se haga scroll, en la pagina de la galeria.

    const categoriaActiva = e.target.dataset.categoria;
    const fotos = dataFotos.fotos[categoriaActiva];

    fotos.forEach((foto) => {
      const slide = `
        <a href="#" class="galeria__carousel-slide">
            <img class="galeria__carousel-image" src="${foto.ruta}" alt="${foto.nombre}" />
        </a>
            `;
      galeria.querySelector(".galeria__carousel-slides").innerHTML += slide; // Al trabajar con querySelector la clase lleva un . antes
    });
  }
});
//e.target; // El target es el objetivo al que le dimos click
//e.target.closest('a') // Aqui le indicamos que solo busque las etiquteas a, en caso de dar click fuera de un a, devuelve null
