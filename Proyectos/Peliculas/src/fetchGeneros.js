const fetchGeneros = async ()   => {
    const url = 'https://api.themoviedb.org/3/genre/movie/popular?api_key=47643206aa052da5a1a02e515825f7de&language=es-CR'
    
    try {
        const response = await fetch(url)
        const data = await response.json()
        
        return data.results;
        
    } catch (e) {
        console.log(e);
        
    }
}

export default fetchGeneros;