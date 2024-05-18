const galeria = document.getElementById("galeria"); // Accedemos a la galeria

const cargarImagen = (id, nombre, ruta, descripcion) => {
  galeria.querySelector(".galeria__imagen").src = ruta; // Dentro de la galeria voy a buscar la imagen activa
  galeria.querySelector(".galeria__imagen").dataset.idImagen = id; // Accedemos a un atributo personalizado
  galeria.querySelector(".galeria__titulo").innerText = nombre; // Aqui vamos a asignar el titulo de la galeria, en el h3
  galeria.querySelector(".galeria__descripcion-imagen-activa").innerText =
    descripcion; // Aqui vamos a poner la descripción de la imagen
};

export { cargarImagen }; // se trabaja con esta forma de exportar, porque vamos a exportar varias funciones
