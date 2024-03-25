import React, { useState, useContext, useEffect } from 'react'

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_Key}`
const AppContext = React.createContext()


export const useFetch = () => {
  return (
    <div>useFetch</div>
  )
}