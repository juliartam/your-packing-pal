import React from "react"
import {Link} from "react-router-dom"

const TripTile = (props) => {
  const {id, name, startDate, endDate, location, userId} = props.trip

  return (
    <div className="grid-container">
      <div className="tile-style medium-6">
        {}
        <h3 className="tile-title">{name}</h3>
        <p className="tile-subtitle"> {location}</p>
        <p className="tile-body">{startDate} - {endDate}</p>
        <Link to={`/trips/${id}`}>See Details</Link>
      </div>
    </div>
  )
}

export default TripTile

