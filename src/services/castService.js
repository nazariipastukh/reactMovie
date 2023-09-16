import {apiService} from "./apiService";
import {urls} from "../constants";

export const castService = {
    getCast: (id) => apiService.get(`${urls.movieById}/${id}/credits`)
}