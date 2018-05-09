import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../utils/BooksAPI'
import Book from './Book'

class Search extends Component {
  state = {
    query: [],
    book: null
  }

  handleKeyUp = (query) => {
    BooksAPI.search(query)
      .then((query) => {
        console.log(query)
        this.setState(() => ({
          query
        }))
      })
  }

  render() {
    const { query } = this.state
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to="/"
            className="close-search"
          >Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onKeyUp={(e) => this.handleKeyUp(e.target.value)} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {query.length > 0 &&
              query.map(book => (
                <li key={book.id}>
                  <Book
                    book={book}
                    handleChange={this.props.handleChange}
                  />
                </li>
              ))
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default Search
