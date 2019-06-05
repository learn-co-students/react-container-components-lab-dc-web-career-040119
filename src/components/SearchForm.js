import React from 'react'

const SearchForm = props => {
  return(
    <form onSubmit={props.search}>
      <input type="text" placeholder='enter your search term here' onChange={props.handleChange}/>
      <input type="submit"/>
    </form>
  )
}

export default SearchForm
