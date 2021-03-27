import React from 'react'
import movieService from '../services/movies-service'

const Search = () => {
  return (
      <div>
        <h1>Search</h1>
        <input type="text"/>
        <button>Search</button>
        <ul>
          <li>
            Result1
          </li>
          <li>
            Result2
          </li>
          <li>
            Result3
          </li>
        </ul>
      </div>
  )
}

export default Search