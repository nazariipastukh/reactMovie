import {apiService} from "./apiService";
import {urls} from "../constants";

export const searchService = {
    getSearchResult: (inputValue, page) => apiService.get(`${urls.search}${inputValue}`, {params: {page}})
}