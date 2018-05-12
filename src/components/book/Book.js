import React, { Component } from 'react'
import BookTitle from './BookTitle'
import BookAuthors from './BookAuthors'
import BookCover from './BookCover'
import BookshelfChanger from './BookshelfChanger'
import PropTypes from 'prop-types'

class Book extends Component {

  state = {
    book: this.props.book,
    shelf: this.props.book.shelf
  }

  checkThumb = () => (
    !this.props.book.imageLinks
      ? "#"
      : this.props.book.imageLinks.thumbnail
  )

  render() {
    const { book } = this.state

    return (
      <div className="book">
        <div className="book-top">
          <BookCover image={this.checkThumb()} />
          <BookshelfChanger handleChange={this.props.handleChange} book={book} />
        </div>
        <BookTitle title={book.title} />
        {this.props.book.authors &&
          <BookAuthors authors={this.props.book.authors} />
        }
      </div>
    )
  }
}
Book.propTypes = {
  book: PropTypes.object.isRequired
}

export default Book
