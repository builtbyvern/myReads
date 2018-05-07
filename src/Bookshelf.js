import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

const Bookshelf = (props) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{props.title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {props.shelf.map((book) => (
          <li>
            <Book
              book={book}
              key={book.id}
              updateShelf={props.updateShelf}
            />
          </li>
        ))}
      </ol>
    </div>
  </div>
)

export default Bookshelf
