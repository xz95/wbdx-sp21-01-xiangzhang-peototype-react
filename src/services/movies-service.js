export const findMovieByTitle = (title) =>
    fetch(`http://www.omdbapi.com/?t=${title}&apikey=91790e2e`)
.then(response => response.json())

export const findMovieById = (imdbID) =>
    fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=91790e2e`)
    .then(response => response.json())

export default {
  findMovieByTitle,
  findMovieById
}
