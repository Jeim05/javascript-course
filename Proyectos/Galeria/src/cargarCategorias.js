import dataCategorias from "./datos/categorias";
const { categorias } = dataCategorias; // Aqui puedo extraer directamente las categorias

// En el archivo index.html tenemos un contenedor con ese id, por lo tanto hacemos la referencia de la siguiente manera
const contenedorCategorias = document.getElementById("categorias");

// Con el metodo forEach recorremos el arreglo para ejecutar una accion por cada categoria.
categorias.forEach((categoria) => {
  // Para poder visualizar cada una de las categorias, se crea el elemento html. de la siguiente forma
  const nuevaCategoria = document.createElement("a"); // En los parametros se indica la etiqueta que qeremos crear
  const plantilla = `
  <img class="categoria__img" src="${categoria.imagenPortada}" alt="" />
	<div class="categoria__datos">
    <p class="categoria__nombre">${categoria.nombre}</p>
		<p class="categoria__numero-fotos">${categoria.numeroFotos} Fotos</p>
	</div>
    `;

  nuevaCategoria.innerHTML = plantilla; // Como ya tengo la etiqueta a, le decimos que su codigo interno corresponde al que asignamos a la plantilla
  nuevaCategoria.classList.add("categoria"); // Aqui le agregamos la clase categoria a la equiqueta a que engloba toda la categoria
  nuevaCategoria.href = "#"; // Accedemos al href de la categoria y le decimos que su enlace es #
  nuevaCategoria.dataset.categoria = categoria.id; // Indicamos que el atributo personalizado tenga el valor de categoria.id

  // Con lo que hemos echo arriba no lo hemos agregado al DOM, lo unico que hemos echo es definir la estructura
  // por lo tanto para agregarlo al DOM, lo hacemos de la siguiente manera
  contenedorCategorias.append(nuevaCategoria);
});
