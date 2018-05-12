import React from 'react'
import PropTypes from 'prop-types'

const BookAuthors = (props) => (
  <div className="book-authors">
    {props.authors.map((author, index) => (
      <span key={index}>
        {author}{props.authors.length - 1 === index ? '' : ', '}
      </span>
    ))}
  </div>
)

BookAuthors.propTypes = {
  authors: PropTypes.array.isRequired
}

export default BookAuthors
