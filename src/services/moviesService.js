import {apiService} from "./apiService";
import {urls} from "../constants";

export const moviesService = {
    getMovies: (page) => apiService.get(urls.movies, {params: {page}})
}