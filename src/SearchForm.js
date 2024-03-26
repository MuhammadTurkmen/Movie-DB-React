import React from 'react'
import { useGlobalContext } from './context'
const SearchForm = () => {
  const {query, setQuery, error} = useGlobalContext()
  return <form className='search-form' onSubmit={(e) => e.preventDefault()}>search component</form>
}

export default SearchForm
