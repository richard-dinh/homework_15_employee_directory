import React from 'react'
import './Card.css'
const Card = () => {
  return(
    <div className="card col-md-3">
      <div className="card-body">
        <h5 className="card-title">Employee Name</h5>
        <hr></hr>
        <p className="card-text">Employee Info</p>
      </div>
    </div>
  )
}

export default Card