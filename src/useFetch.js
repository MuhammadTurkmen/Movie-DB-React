import React, { useState, useContext, useEffect } from 'react'

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_Key}`


 const useFetch = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState({show:false, msg:''})
  const [movies, setMovies] = useState([])
  
  return
}

export default useFetch