import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookList from './BookList'
import BookSearch from './BookSearch'

import './App.css'

class BooksApp extends Component {
  state = {
    books: null,
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  render() {
    return (
      <div className="app">
        {!this.state.books
          ? ''
          : <Route exact path="/" render={() => (
            <BookList
              books={this.state.books}
            />
          )} />
        }

        <Route path="/search" component={BookSearch} />
      </div>
    )
  }
}

export default BooksApp
