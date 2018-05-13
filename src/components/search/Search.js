import React, { Component } from 'react'
import * as BooksAPI from '../utils/BooksAPI'
import SearchBar from './search/SearchBar'
import SearchResults from './search/SearchResults'
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
    query.length > 0 &&
      BooksAPI.search(query)
        .then((res) => {
          isObject(res)
            ? this.setState(() => ({ query: [], error: true }))
            : this.setState(() => ({ query: res, error: false }))
        })

    // if the searchbar is empty
    query.length === 0 &&
      this.setState(() => ({
        query: [],
        error: false
      }))
  }

  render() {
    const { query } = this.state

    return (
      <div className="search-books">
        <SearchBar handleKeyUp={this.handleKeyUp} />
        <SearchResults query={query} handleChange={this.props.handleChange} />
      </div>
    )
  }
}

Search.propTypes = {
  handleChange: PropTypes.func.isRequired
}

export default Search
