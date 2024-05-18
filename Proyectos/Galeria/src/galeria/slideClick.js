import datos from "./../datos/fotos";
import { cargarImagen } from "./cargarImagen";

// En esta funcion lo que hacemos es que al hacer click sobre cualquier imagen del slide dentro de las categorias
// pse abra la imagen en grande con su respectiva información
const slideClick = (e) => {
  let ruta, nombre, descripcion; // datos necesarios para hacer la busqueda de la imagen

  const id = parseInt(e.target.dataset.id); // Convertimos el id del dataset en un entero, ya que este viene como texto y el id de la imagen es un numero
  const galeria = document.getElementById("galeria"); // se recupera el contenedor de la galeria, para hacer las referencias
  const categoriaActiva = galeria.dataset.categoria; // se obtiene la categoria de la galeria donde entramos. 

  datos.fotos[categoriaActiva].forEach((foto) => { // Se hace un recorrido de todas las fotos en la categoria seleccionada
    if (foto.id === id) { // para luego hacer la comparación de la imagen a la que hicimos click por medio del id
      ruta = foto.ruta; // se asignan los datos recuperados a cada variable
      nombre = foto.nombre;
      descripcion = foto.descripcion;
    }
  });

  cargarImagen(id, nombre, ruta, descripcion); // Se carga la imagen seleccionada en grande. Esta funcion se reutiliza
};

export default slideClick;
