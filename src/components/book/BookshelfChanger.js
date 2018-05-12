import React from 'react'
import PropTypes from 'prop-types'

const BookshelfChanger = (props) => {
  const options = [
    { value: null, text: 'Move to...', disabled: true },
    { value: 'currentlyReading', text: 'Currently Reading', disabled: false },
    { value: 'wantToRead', text: 'Want To Read', disabled: false },
    { value: 'read', text: 'Read', disabled: false },
    { value: 'none', text: 'None', disabled: false }
  ]

  return (
    <div className="book-shelf-changer">
      <select
        defaultValue={props.book.shelf ? props.book.shelf : 'none'}
        onChange={(event) => props.handleChange(props.book, event.target.value)}>
        {options.map(opt =>
          <option
            disabled={opt.disabled}
            key={opt.value}
            value={opt.value}>{opt.text}</option>
        )}
      </select>
    </div>
  )
}

BookshelfChanger.propTypes = {
  handleChange: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired
}

export default BookshelfChanger
