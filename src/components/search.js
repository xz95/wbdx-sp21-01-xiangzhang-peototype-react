import React, {useState, useEffect} from 'react'
import movieService from '../services/movies-service'
import {Link, useParams, useHistory} from "react-router-dom";

const Search = () => {
  const {title} = useParams()
  const [searchTitle, setSearchTitle] = useState("")
  const [results, setResults] = useState({Search:[]})
  const history = useHistory()
  useEffect(() => {
    setSearchTitle(title)
    if(title) {
      movieService.findMovieByTitle(title)
      .then(results => setResults(results))
    }
  }, [title])
  return(
      <div>
        <h1>Search</h1>
        <input
            onChange={(event) => {
              setSearchTitle(event.target.value)
            }}
            className="form-control"
            value={searchTitle}/>
        <button
            onClick={() => {history.push(`/search/${searchTitle}`)}}
            className="btn btn-primary btn-block">
          Search
        </button>
        <ul className="list-group">
          {
            results.Search.map(movie =>
                <li className="list-group-item" key={movie.imdbID}>
                  <Link to={`/details/${movie.imdbID}`}>
                    {movie.Title}
                  </Link>
                </li>
            )
          }
        </ul>
      </div>
  )
}

export default Search