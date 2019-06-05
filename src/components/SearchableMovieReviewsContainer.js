import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import SearchForm from './SearchForm'

const NYT_API_KEY = '8XPpXcE4zDmtWgCxdqGQhWAj2hAgSQ7j';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component{

  state = {
    searchTerm: '',
    reviews: []
  }


  handleChange = (e) => {
    this.setState({searchTerm: e.target.value})
}
  search = (e) => {
    e.preventDefault()

    fetch(`${URL}&query=${this.state.searchTerm}`)
      .then(resp => resp.json())
      .then(respObj => this.setState({reviews: respObj.results}))
  }

  render() {
    return (
      <div className='searchable-movie-reviews'>
        <SearchForm search={this.search} handleChange={this.handleChange}/>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer
