import React from "react"
import {Link} from "react-router-dom"

const ActivityTile = ({id, name, date, notes}) => {


  return (

    <div className="grid-x grid-padding-x align-center">
      <div className="cell large-4">
        <div className="tile-style grid-x grid-padding-x align-center">
          <div className="cell large-4">
            <h3 className="tile-title">{name}</h3>
            <p className="tile-subtitle"> {date}</p>
            <p className="tile-body">{notes}</p>
            <Link to={`/trips/${id}/activities/${id}/items-new`}>add item</Link>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ActivityTile
