import React, {Component} from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

// const NYT_API_KEY = 'UwqFEwGQ4ADuRtGlcGni6ItHFzS3DVAh';
// const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
//             + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component{
  constructor(){
    super()

    this.state = {
      reviews: []
    }
  }



  componentDidMount(){
    fetch('https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=UwqFEwGQ4ADuRtGlcGni6ItHFzS3DVAh')
    .then(res => res.json())
    .then(json => {this.setState({
        reviews: json.results
      })
    })
  }

  render(){
    // debugger
    return(
      <div className='latest-movie-reviews'>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}
