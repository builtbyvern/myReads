import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookSearch from './BookSearch'
import Bookshelf from './BookShelf'
import { Link } from 'react-router-dom'

import './App.css'

class BooksApp extends Component {
  state = {
    books: [],
    currentlyReading: [] // possibly to be an array of book ids. we shall see
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() =>({ books }))
      })
  }

    /*
  export const update = (book, shelf) =>
    fetch(`${api}/books/${book.id}`, {
      method: 'PUT',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ shelf })
    }).then(res => res.json())
  */

  handleChange = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then( (res) => {
        BooksAPI.getAll()
          .then((books) => {
            this.setState({ books })
          })
      })
  }

  render() {
    const { books } = this.state

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Bookshelf
                  title="Currently Reading"
                  books={books.filter((b) => b.shelf === 'currentlyReading')}
                  handleChange={this.handleChange}
                />
                <Bookshelf
                  title="Want To Read"
                  books={books.filter( (b) => b.shelf === 'wantToRead' )}
                  handleChange={this.handleChange}
                />
                <Bookshelf
                  title="Read"
                  books={books.filter((b) => b.shelf === 'read')}
                  handleChange={this.handleChange}
                />
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )} />

        <Route path="/search" render={() => (
          <BookSearch addBook={this.addBook} handleChange={this.handleChange} />
        )}/>
      </div>
    )
  }
}

export default BooksApp
