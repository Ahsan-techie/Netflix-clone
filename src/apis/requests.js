const api = 'ddf89330eaf950bec8e7bb249585f561'
const requests = {
    fetchTrending :`/trending/all/week?api_key=${api}&language=en-US`,
    fetchNetflixOriginals : `/discover/movie?api_key=${api}&with_networks=213`,
    fetchTopRated :`/movie/top_rated?api_key=${api}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${api}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${api}&with_genres=35`,
    fetcHorrorMovies:`/discover/movie?api_key=${api}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${api}&with_genres=10749`,
    fetchDocumentries: `/discover/movie?api_key=${api}&with_genres=99`,
}

export default requests