import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const SearchBar = (props) => (
  <div className="search-books-bar">
    <Link to="/" className="close-search">
      Close
    </Link>
    <div className="search-books-input-wrapper">
      <input
        type="text"
        placeholder="Search by title or author"
        onKeyUp={(e) => props.handleKeyUp(e.target.value)} />
    </div>
  </div>
)

SearchBar.propTypes = {
  handleKeyUp: PropTypes.func.isRequired
}

export default SearchBar
