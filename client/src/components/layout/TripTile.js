import React from "react"
import {Link} from "react-router-dom"

const TripTile = (props) => {
  const {id, name, startDate, endDate, location} = props.trip

  return (
    <div className="grid-container">
      <div className="tile-style medium-6">
        <h3 className="tile-title">{name}</h3>
        <p className="tile-subtitle"> {location}</p>
        <p className="tile-body">{startDate} - {endDate}</p>
        <Link to={`/trips/${id}`}>See Details</Link>
      </div>
    </div>
  )
}

export default TripTile

{/* 
      <h2>XY Grid Gutter Example</h2>
<p>Cells have background red, content inside has background blue. </p>
<h4>Margin Gutters</h4>
<div class="grid-x grid-margin-x">
  <div class="medium-6 large-4 cell"><div class="demo">12/6/4 cells</div></div>
  <div class="medium-6 large-8 cell"><div class="demo">12/6/8 cells</div></div>
</div>
<h4>Padding Gutters</h4>
<div class="grid-x grid-padding-x">
  <div class="medium-6 large-4 cell "><div class="demo">12/6/4 cells</div></div>
  <div class="medium-6 large-8 cell"><div class="demo">12/6/8 cells</div></div>
</div> */}
