import React from 'react'
import Review from './Review'
// import {renderedDive} from "enzyme/src/Utils";

const MovieReviews = ({reviews}) => {
  return(
    <div className='reviewList'>
      {reviews.map(review => <Review key={review.link.url} title={review.display_title} summary={review.summary_short}/>)}
    </div>
  )
}

export default MovieReviews
