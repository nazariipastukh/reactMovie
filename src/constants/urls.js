const movies = '/discover/movie'
const genres = '/genre/movie/list'
const poster = 'https://image.tmdb.org/t/p/w500'

export const urls = {
    movies: {
        base: movies,
        byId: (id) => `/${movies}/${id}`
    },
    genres,
    poster
}