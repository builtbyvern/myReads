import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {

  state = {
    book: this.props.book,
    shelf: this.props.book.shelf
  }

  render() {
    const { book } = this.state
    const options = [
      {value: null, text: 'Move to...', disabled: true},
      {value: 'currentlyReading', text: 'Currently Reading', disabled: false},
      {value: 'wantToRead', text: 'Want To Read', disabled: false },
      {value: 'read', text: 'Read', disabled: false},
      {value: 'none', text: 'None', disabled: false}
    ]

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={
            { width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }
          }></div>
          <div className="book-shelf-changer">
            <select defaultValue={book.shelf} onChange={(event) => this.props.handleChange(book, event.target.value)}>
              {options.map(opt =>
                <option
                  disabled={opt.disabled}
                  key={opt.value}
                  value={opt.value}>{opt.text}</option>
              )}
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors[0]}</div>
      </div>
    )
  }
}
Book.propTypes = {
  book: PropTypes.object.isRequired
}

export default Book
