const galeria = document.getElementById("galeria");

const carousel = (direccion) => {
  // Creamos un objeto de opciones para utilizar para crear el observer
  const opciones = {
    root: document.querySelector(".galeria__carousel"),
    rootMargin: "0px",
    threshold: 0.9,
  };

  // Con el observer vamos a tomar las imagenes visibles del slide
  const observer = new IntersectionObserver((entradas) => {
    const slidesVisibles = entradas.filter((entrada) => {
      // Vamos a guardar dentro de ese arreglo los elementos que son visibles
      if (entrada.isIntersecting === true) {
        return entrada;
      }
    });

    if (direccion === "atras") {
      const primerSlideVisible = slidesVisibles[0];
      const indexPrimerSlideVisible = entradas.indexOf(primerSlideVisible);

      if (indexPrimerSlideVisible >= 1) {
        entradas[indexPrimerSlideVisible - 1].target.scrollIntoView({
          behavior: "smooth",
          inline: "start",
        });
      }
    } else if (direccion === "adelante") {
      const ultimaSlideVisible = slidesVisibles[slidesVisibles.length - 1];
      const indexUltimoSlideVisible = entradas.indexOf(ultimaSlideVisible);

      /* Ahora lo que vamos a hacer es pasar esa ultima imagen que no estaba visible
      al inicio del slide */
      if (entradas.length - 1 > indexUltimoSlideVisible) {
        entradas[indexUltimoSlideVisible + 1].target.scrollIntoView({
          behavior: "smooth",
          inline: "start",
        });
      }
    }

    const slides = galeria.querySelectorAll(".galeria__carousel-slide");
    slides.forEach((slide) => {
      observer.unobserve(slide); // con esta funcion se devuelve todos los elementos que estamos observando
    });
  }, opciones);

  const slides = galeria.querySelectorAll(".galeria__carousel-slide");
  slides.forEach((slide) => {
    observer.observe(slide); // con esta funcion se devuelve todos los elementos que estamos observando
  });
};

export default carousel;


// FUNCIONALIDADES ADICIONALES A AGREGAR
/*  
* Agregar una funcionalidad para que cuando no haya más slides hacia adelante, la flecha se oculte lo mismo para el de atras 
 * Tambien agregar esa funcionalidad en el boton de siguiente y atras de cada imagen grande
 *  */