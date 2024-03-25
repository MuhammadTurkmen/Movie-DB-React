import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT } from './context'

const SingleMovie = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [error, setErorr] = useState({show: false, msg:''})

  const fetchMovie = async (url) => {
    const response =  await fetch(url)
    const data = await response.json()
    if(data.Reasponse === 'False') {
      setErorr({show: true, msg: data.Error})
      setIsLoading(false)
    }   
    else { 
      setMovie(data)
      setIsLoading(false) 
    }
  }

  useEffect(() => {
    fetchMovie(`${API_ENDPOINT}&i=${id}`)
  }, [id])

  if(isLoading) {
    return <div className='loading'></div>
  }

  if(error.show) {
    return <div className='page-error'></div>
  }
  
  
  return <h2>single movie</h2>
}

export default SingleMovie
