/* En este parte lo que hacemos es darle un evento a las categorias
en este caso para ver más imagenes y información de cada uno de los continentes
*/
import dataFotos from "./datos/fotos";
import { cargarImagen } from "./galeria/cargarImagen";
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

    const categoriaActiva = e.target.closest("a").dataset.categoria; // Aqui, agregamos closest() para evitar que si damos en el texto de la imagen, genere un problema en el slide
    galeria.dataset.categoria = categoriaActiva; // Esto lo hacemos para poder cambiar de imagen en el slide. Lo que hacemos es crear un atributo personalizado

    const fotos = dataFotos.fotos[categoriaActiva];
    const carousel = galeria.querySelector(".galeria__carousel-slides"); // Se busca el elemento del carousel
    
    const {id, nombre, ruta, descripcion} = fotos[0];
    // Despues de cargar la galeria voy a cargar la imagen activa
    cargarImagen(id, nombre, ruta, descripcion);

    carousel.innerHTML = ""; // Antes de cargar las fotos, accedemos al carousel al HTML interno y lo dejamos vacio, para cargar las otras imagenes

    fotos.forEach((foto) => {
      const slide = `
        <a href="#" class="galeria__carousel-slide">
            <img class="galeria__carousel-image" src="${foto.ruta}" data-id="${foto.id}" alt="${foto.nombre}" />
        </a>
            `;
      galeria.querySelector(".galeria__carousel-slides").innerHTML += slide; // Al trabajar con querySelector la clase lleva un . antes
    });

    galeria
      .querySelector(".galeria__carousel-slide")
      .classList.add("galeria__carousel-slide--active");
  }
});
//e.target; // El target es el objetivo al que le dimos click
//e.target.closest('a') // Aqui le indicamos que solo busque las etiquteas a, en caso de dar click fuera de un a, devuelve null
