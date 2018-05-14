import React, { Component } from 'react'
import * as BooksAPI from '../../utils/BooksAPI'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import PropTypes from 'prop-types'
import isObject from 'isobject'

class Search extends Component {
  state = {
    query: [],
    book: null,
    error: false,
  }

  handleKeyUp = (query) => {
    // if someone has typed something into the searchbar
    if ( query.length > 0 ) {
      BooksAPI.search(query)
        .then((res) => {
          // if its an error in getting
          if ( isObject(res) === true ) {
            this.setState(() => ({ query: [], error: true }))
          // now we have the goods.
          } else {
            // if libray id bok has shelf, assign it the response before setting state
            this.props.library.forEach( book => {
              if (res.find(b => (b.id === book.id))) {
                let i = res.findIndex( b => (b.id === book.id) )
                res[i].shelf = book.shelf
              }
            });

            this.setState(() => ({ query: res, error: false }))
          }
        })
    }

    query.length === 0 &&
      this.setState(() => ({
        query: [],
        error: false
      }))
  }

  render() {
    const { query } = this.state
    const { handleChange } = this.props

    return (
      <div className="search-books">
        <SearchBar handleKeyUp={this.handleKeyUp} />
        <SearchResults query={query} handleChange={handleChange} />
      </div>
    )
  }
}

Search.propTypes = {
  handleChange: PropTypes.func.isRequired,
  library: PropTypes.array.isRequired,
}

export default Search
