const cargarTitulos = (results) => {
    const contenedor = document.querySelector('#populares .main__grid')
    results.forEach(result => {
        const plantilla = `
     <div class="main__media">
		<a href="#" class="main__media-thumb">
			<img class="main__media-img" src="https://image.tmdb.org/t/p/w500/${result.poster_path}" alt="" />
		</a>
		<p class="main__media-titulo">${result.title}</p>
		<p class="main__media-fecha">2021</p>
	</div>
    `

    contenedor.insertAdjacentHTML('beforeend',plantilla)
    });
}

export default cargarTitulos;