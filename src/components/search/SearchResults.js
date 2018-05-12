import React from 'react'
import Book from '../book/Book'
import PropTypes from 'prop-types'

const SearchResults = (props) => (
  <div className="search-books-results">
    {props.query.length > 0 &&
      <ol className="books-grid">
        {
          props.query.map(book => (
            <li key={book.id}>
              <Book
                book={book}
                handleChange={props.handleChange}
              />
            </li>
          ))
        }
      </ol>
    }
  </div>
)

SearchResults.propTypes = {
  query: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
}


export default SearchResults
