import React from 'react'
import Book from './book/Book'
import PropTypes from 'prop-types'

const Bookshelf = (props) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{props.title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {props.books.map((book) => (
          <li key={book.id}>
            <Book
              book={book}
              handleChange={props.handleChange}
            />
          </li>
        ))}
      </ol>
    </div>
  </div>
)

Bookshelf.propTypes = {
  books: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default Bookshelf
