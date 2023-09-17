import {apiService} from "./apiService";
import {urls} from "../constants";

export const mainPageService = {
    getPopular: () => apiService.get(urls.popular),
    getTopRated: () => apiService.get(urls.topRated),
    getUpcoming: () => apiService.get(urls.upcoming)
}