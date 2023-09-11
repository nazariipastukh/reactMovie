import {apiService} from "./apiService";
import {urls} from "../constants";

export const moviesService = {
    getMovies: () => apiService.get(urls.movies.base)
}