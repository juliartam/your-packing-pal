import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import TripTile from "./TripTile"

const TripList = (props) => {
  const [trips, setTrips] = useState([])

  const getTrips = async () => {
    try {
      const response = await fetch("/api/v1/trips")
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText}`
        const error = new Error(errorMessage)
        throw error
      }
      const body = await response.json()
      const newTrips = body.trips
      setTrips(newTrips)
    } catch (err) {}
  }

  useEffect(() => {
    getTrips()
  }, [])

  const tripTiles = trips.map((trip) => {
    return <TripTile key={trip.id} trip={trip} />
  })

  return (
    <div className="grid-container">
      <div className="page-background">
        <div className="page-header-container page-header-title">My Packing Lists</div>
        <div><Link to="/trips/new" className="page-header-container page-header-title material-icons">add_box</Link>
        </div>
      </div>
      {tripTiles}
    </div>
  )
}

export default TripList
