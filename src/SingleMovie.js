import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT } from './context'
import { url } from './Movies'

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
    return <div className='page-error'>
      <h1>{error.msg}</h1>
      <Link to='/' className="btn">back to movies</Link>
    </div>
  }
  
  
  const {Poster: poster, Title: title, Plot: plot, Year: year} = movie
  return <section className='single-movie'>
    <img src={poster ? poster : url} alt={title}/>
  </section>
}

export default SingleMovie
