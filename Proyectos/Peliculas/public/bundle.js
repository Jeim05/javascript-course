'use strict';

const cargarTitulos = (results) => {
    const contenedor = document.querySelector('#populares .main__grid');
    results.forEach(result => {
        const plantilla = `
     <div class="main__media">
		<a href="#" class="main__media-thumb">
			<img class="main__media-img" src="https://image.tmdb.org/t/p/w500/${result.poster_path}" alt="" />
		</a>
		<p class="main__media-titulo">${result.title}</p>
		<p class="main__media-fecha">2021</p>
	</div>
    `;

    contenedor.insertAdjacentHTML('beforeend',plantilla);
    });
};

const fetchPopulares = async() =>{
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=47643206aa052da5a1a02e515825f7de&language=es-CR&page=1';
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        return data.results;
        
    } catch (e) {
        console.log(e);
        
    }
};

const cargar = async () =>{
   const results = await fetchPopulares();
   cargarTitulos(results);
};

cargar();
//# sourceMappingURL=bundle.js.map
