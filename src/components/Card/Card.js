import React from 'react'
import './Card.css'
const Card = props => {
  return(
    <div className="card col-md-3">
      <div className="card-body">
      <h5 className="card-title">{props.first_name} {props.last_name}</h5>
        <hr></hr>
      <p className="card-text">Department: {props.department}</p>
      <p className="card-text">Title: {props.title}</p>
      </div>
    </div>
  )
}

export default Card