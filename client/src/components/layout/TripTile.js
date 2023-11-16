import React from "react"
import { Link } from "react-router-dom"

const TripTile = ( props ) => {
  const { id, name, startDate, endDate, location, notes, status } = props.trip
  return (
    <div>
      <h2>Trip Tile</h2>
      <h3>{name}</h3>
      <h3>{location}</h3>
      <h3>starts: {startDate} ends: {endDate}</h3>
      <h3>{status}</h3>
      <p>{notes}</p>
      {/* <Link to={`/trips/${id}`}>Learn more and see trip </Link> */}
    </div>
  )
}

export default TripTile