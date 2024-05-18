import cerrarGaleria from "./cerrarGaleria";

const galeria = document.getElementById("galeria");
galeria.addEventListener("click", (e) => {
  const boton = e.target.closest("button");

  // - - - CERRAR GALERIA
  /* Añadimos en el if el signo de interrogacion porque si se da click en un elemento diferente de boton no arroge 
   un error, luego cuando se hace la verificacion de que no es boton se hace la comparación con el data-set que le 
   asigmanos al boton de cerrar galeria.*/
  if (boton?.dataset.accion == "cerrar-galeria") {
    cerrarGaleria();
  }

  // - - - CAROUSEL SLIDE CLICK
  if (e.target.dataset.id) { // Hacemos el condicional, para que en caso que se de click fuera de una imagen del slide, no de un error.
    
  }
});
