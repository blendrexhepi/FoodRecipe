import React from 'react'

const SearchBar = ({
  value,
  isLoading,
  onChange,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
      value={value}
      disabled={isLoading}
      onChange={onChange}
      className='form-control'
      placeholder='Search Recipes'>
      </input>
      <input type="submit"
      disabled={isLoading || !value}
      className='btn'
      value="Search" />
    </form>
  )
}

export default SearchBar