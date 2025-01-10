const fetchPopulares = async() =>{
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=47643206aa052da5a1a02e515825f7de&language=es-CR&page=1'
    
    try {
        const response = await fetch(url)
        const data = await response.json()
        
        return data.results;
        
    } catch (e) {
        console.log(e);
        
    }
}

export default fetchPopulares