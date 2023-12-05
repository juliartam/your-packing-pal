import React, {useState, useEffect} from "react"
import {Link, useParams} from "react-router-dom"
import ActivityTile from "./ActivityTile"
import {Redirect} from "react-router-dom"

//{#000} shows trip details, activities by day, add items
const TripDetail = (props) => {
  const [trip, setTrip] = useState({
    trips: "",
    activities: [],
  })

  const {id, name, location, startDate, endDate, notes, status} = trip
  const {id: tripId} = useParams()

  const getTrip = async () => {
    try {
      const response = await fetch(`/api/v1/trips/${tripId}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const body = await response.json()
      const trip = body.trip
      setTrip(trip)
    } catch (err) {
      console.error(`Error in fetch ${err.message}`)
    }
  }

  useEffect(() => {
    getTrip()
  }, [])

  const activityTiles = trip.activities.map((activity) => {
    return <ActivityTile key={activity.id} name={activity.name} />
  })

  return (
    <div className="grid-x grid-padding-x align-left">
      <div className="cell large-4">
        <div className="page-background">
          <h1 className="page-header-title">{name}</h1>
          <h4 className="page-header-subtitle">{location}</h4>
          <h4 className="page-header-caption">
            {startDate} - {endDate}
          </h4>
          <Link
            to={`/trips/${id}/activities-new`}
            className="page-header-container page-header-title material-icons"
          >
            add_box
          </Link>
          <div className="grid-x grid-padding-x align-center">
            <div className="cell small-4">{activityTiles}</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default TripDetail
