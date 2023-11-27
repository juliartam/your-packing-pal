import React from "react"
import {Link} from "react-router-dom"

const ActivityTile = ({name, date, notes}) => {


  return (
    <div className="grid-container">
      <div className="tile-style medium-6">
        <h3 className="tile-title">{name}</h3>
        <p className="tile-subtitle"> {date}</p>
        <p className="tile-body">{notes}</p>
        <Link to={`/trips/activities-new`}>add an activity</Link>
      </div>
    </div>
  )
}

export default ActivityTile
