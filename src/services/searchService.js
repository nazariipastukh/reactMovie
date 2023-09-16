import {apiService} from "./apiService";
import {urls} from "../constants";

export const searchService = {
    getSearchResult: (inputValue) => apiService.get(`${urls.search}${inputValue}`)
}