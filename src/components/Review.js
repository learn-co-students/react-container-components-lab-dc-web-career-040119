import React from 'react'

const Review = ({title, summary}) => {

  return(
    <div>
      <h2>{title}</h2>
      <p>{summary}</p>
    </div>
  )
}

export default Review
