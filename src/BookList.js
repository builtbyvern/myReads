import React, { Component } from 'react'
import Bookshelf from './Bookshelf'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class BookList extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
  }
  state = {
    currentlyReading: [],
    wantToRead:[],
    read: [],
  }
  componentDidMount() {
    this.setState(() => ({
      currentlyReading: this.props.books.filter((book) => (
        book.shelf === 'currentlyReading'
      )),
      wantToRead: this.props.books.filter((book) => (
        book.shelf === 'wantToRead'
      )),
      read: this.props.books.filter((book) => (
        book.shelf === 'read'
      ))
    }))
  }
  render() {
    return (
      <div>
        {this.state.currentlyReading.map((book) => (
          book.title
        ))}
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <Bookshelf
                title="Currently Reading"
                shelf={this.state.currentlyReading}
              />
              <Bookshelf
                title="Want to Read"
                shelf="wantToRead"
              />
              <Bookshelf
                title="Read"
                shelf="read"
              />
            </div>
          </div>
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default BookList
