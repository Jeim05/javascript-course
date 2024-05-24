import data from "../datos/fotos"; // Se importa la data de las fotos para poder acceder al cada uno de los item

const galeria = document.getElementById("galeria"); // Accedemos a la galeria

const cargarImagen = (id, nombre, ruta, descripcion) => {
  galeria.querySelector(".galeria__imagen").src = ruta; // Dentro de la galeria voy a buscar la imagen activa
  galeria.querySelector(".galeria__imagen").dataset.idImagen = id; // Accedemos a un atributo personalizado
  galeria.querySelector(".galeria__titulo").innerText = nombre; // Aqui vamos a asignar el titulo de la galeria, en el h3
  galeria.querySelector(".galeria__descripcion-imagen-activa").innerText =
    descripcion; // Aqui vamos a poner la descripción de la imagen

  const categoriaActual = galeria.dataset.categoria;
  const fotos = data.fotos[categoriaActual]; // Accedemos a la categoria dentro de la data. Se busque por medio de
  //la categoria actual que viene desde el dataset

  // Por cada foto vamos a acceder a la informacion
  let indexImagenActual; // Definimos esta variable para acceder a la posición de la foto
  fotos.forEach((foto, index) => {
    if (foto.id === id) {
      indexImagenActual = index; // Se asigna el index a la variable creada
    }
  });

  // MARCAMOS LA IMAGEN DEL CAROUSEL COMO ACTIVA
  if (galeria.querySelectorAll(".galeria__carousel-slide").length > 0) {
    // Se hace la validacion para evitar que de un error a la hora de cargar el slide por primera vez

    // ELIMINAMOS LA CLASE ACTIVE DE CUALQUIER SLIDE
    galeria
      .querySelector(".galeria__carousel-slide--active")
      .classList.remove("galeria__carousel-slide--active");

    /* Busca dentro de la galeria la imagen especificada y se le asigna la clase que tiene el borde, 
    para que cambie cuando se seleccione*/
    galeria
      .querySelectorAll(".galeria__carousel-slide")
      [indexImagenActual].classList.add("galeria__carousel-slide--active");
  }
};

// CREAMOS UNA FUNCION PARA CARGAR LA ANTERIOR O SIGUIENTE IMAGEN
const cargarAnteriorSiguiente = (direccion) => {
  const categoriaActual = galeria.dataset.categoria;
  const fotos = data.fotos[categoriaActual];

  // Accedemos al id de la imagen que esta abierta en ese momento
  const idImagenActual = parseInt(
    galeria.querySelector(".galeria__imagen").dataset.idImagen
  );

  let indexImagenActual;
  fotos.forEach((foto, index) => {
    if (foto.id === idImagenActual) {
      // Se debe hacer la conversion del dataset idImagen, ya que viene com cadena
      indexImagenActual = index;
    }
  });

  if (direccion == "siguiente") {
  } else if (direccion === "anterior") {
  } else {
  }
};

export { cargarImagen, cargarAnteriorSiguiente }; // se trabaja con esta forma de exportar, porque vamos a exportar varias funciones
