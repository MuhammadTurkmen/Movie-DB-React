import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT } from './context'

const SingleMovie = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [error, setErorr] = useState({show: false, msg:''})

  const fetchMovie = async (url) => {
    const response =  
  }
  
  return <h2>single movie</h2>
}

export default SingleMovie
