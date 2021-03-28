export const findMealByTitle = (title) =>
    // fetch(`http://www.omdbapi.com/?s=${title}&apikey=91790e2e`)
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${title}`)
    .then(response => response.json())

export const findMealById = (idMeal) =>
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    .then(response => response.json())

export default {
  findMealByTitle,
  findMealById
}