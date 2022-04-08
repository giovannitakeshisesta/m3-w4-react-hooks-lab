import http from "./BaseService";

export const searchByIngredient = (data) => http.get(`filter.php?i=${data}`)
export const searchByCocktail = (data) => http.get(`search.php?s=${data}`)
