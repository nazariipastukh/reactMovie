const movies = '/discover/movie'
const genres = '/genre/movie/list'
const poster = 'https://image.tmdb.org/t/p/w500'
const movieByGenre = '/discover/movie?with_genres='
const movieById = '/movie'
const search = '/search/movie?query='
const popular = `${movieById}/popular`
const topRated = `${movieById}/top_rated`
const upcoming = `${movieById}/upcoming`

export const urls = {
    movies,
    genres,
    poster,
    movieByGenre,
    movieById,
    search,
    popular,
    topRated,
    upcoming
}