import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

// const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';

class SearchableMovieReviewsContainer extends Component {
  constructor(){
    super()

    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  handleSearchInputChange = (event) => {
    this.setState({
      seachTerm: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}api-key=f98593a095b44546bf4073744b540da0`)
    .then(res => res.json())
    .then(res => this.setState({
      reviews: res.results
    }))
  }

  render(){
    return(<div className='searchable-movie-reviews'>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="search-input">Search Movie Reviews</label>
          <input
            id="search-input"
            type="text"
            style={{ width: 300 }}
            onChange={this.handleSearchInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
        </div>
      )}
}

export default SearchableMovieReviewsContainer;
