import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookSearch from './BookSearch'
import Book from './Book'
import { Link } from 'react-router-dom'

import './App.css'

class BooksApp extends Component {
  state = {
    books: null,
    currentlyReading: [],
    wantToRead: [],
    read: [],
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() =>({
          books: books,
          currentlyReading: books.filter((b) => (
            b.shelf === 'currentlyReading'
          )),
          wantToRead: books.filter((b) => (
            b.shelf === 'wantToRead'
          )),
          read: books.filter((b) => (
            b.shelf === 'read'
          ))
        }))
      })
  }

  handleChange = (book, shelf) => {
    let books = this.state.books
    let currentBook = books.findIndex( b => b.id === book.id)
    books[currentBook].shelf = shelf

    this.setState(() => ({
      books,
      currentlyReading: books.filter((b) => (
        b.shelf === 'currentlyReading'
      )),
      wantToRead: books.filter((b) => (
        b.shelf === 'wantToRead'
      )),
      read: books.filter((b) => (
        b.shelf === 'read'
      ))
    }))

  }

  render() {
    const { books, currentlyReading, wantToRead, read } = this.state
    const current = [];

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {currentlyReading.map((book) => (
                        <li key={book.id}>
                          <Book
                            book={book}
                            changeShelf={this.handleChange}
                          />
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {wantToRead.map((book) => (
                        <li key={book.id}>
                          <Book
                            book={book}
                            changeShelf={this.handleChange}
                          />
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {read.map((book) => (
                        <li key={book.id}>
                          <Book
                            book={book}
                            changeShelf={this.handleChange}
                          />
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )} />

        <Route path="/search" component={BookSearch} />
      </div>
    )
  }
}

export default BooksApp
