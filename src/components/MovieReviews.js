import React, {Component, Fragment} from 'react'

const MovieReviews = (props) => {
  return(<>
            <ul>
              {props.results.map(review => <React.Fragment> key={review.display_title}>
                <h4>{review.headline}</h4>
                <p>{review.summary_short}</p>
              <a href='{review.link.url}'>{review.suggested_link_text}</a> </React.Fragment>
            </ul>
        </>)
}

export default MovieReviews
