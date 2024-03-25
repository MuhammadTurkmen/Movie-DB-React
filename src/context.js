import React, { useState, useContext, useEffect } from 'react'
import useFetch from './useFetch'
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_Key}`
const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const [query, setQuery] = useState('superman')
  const {isLoading, error, data: movies} = useFetch(`&s=${query}`)
  

  

  
  return <AppContext.Provider value={{
    isLoading,
    error,
    movies,
    query,
    setQuery
  }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
