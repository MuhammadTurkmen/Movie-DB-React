import React from 'react'
import { useGlobalContext } from './context'
const SearchForm = () => {
  const {query, setQuery, error} = useGlobalContext()
  return <form className='search-form' onSubmit={(e) => e.preventDefault()}>
    <h2>search movies</h2>
    <input type="text" className='form-input' onChange={(e) => e.targer.value}/>
  </form>
}
 
export default SearchForm
