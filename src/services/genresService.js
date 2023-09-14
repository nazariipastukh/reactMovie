import {apiService} from "./apiService";
import {urls} from "../constants";

export const genresService = {
    getGenres: () => apiService.get(urls.genres),
    getByGenre: (id, page) => apiService.get(`${urls.movieByGenre}${id}`, {params: {page}})
};