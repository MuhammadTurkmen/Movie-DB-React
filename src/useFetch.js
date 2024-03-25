import React, { useState, useContext, useEffect } from 'react'

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_Key}`


 const useFetch = (urlPrams) => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState({show:false, msg:''})
  const [movies, setMovies] = useState([])
  
  const fetchMovies = async (url) => {
    setIsLoading(true) 
    try {
      const response = await fetch(url)
      const data = await response.json()

      if(data.Response === 'True') {
        setMovies(data.Search)
        setError({show: false, msg: ''})
      } 
      else {
        setError({show: true, msg: data.Error})
      }
      setIsLoading(false)
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}&s=${query}`)
  }, [query])

  return
}

export default useFetch