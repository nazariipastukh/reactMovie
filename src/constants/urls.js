export const baseURL = process.env.REACT_APP_APP

export const urls = {
    movies: '/discover/movie',
    movieById: (id) => `/movie/${id}`,
    genres: '/genre/movie/list',
    poster: 'https://image.tmdb.org/t/p/w500'
}