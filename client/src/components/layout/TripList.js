import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import TripTile from "./TripTile"

const TripList = ( props ) => {
  const [trips, setTrips] = useState( [] )

  const getTrips = async () => {
    try {
      const response = await fetch( "/api/v1/trips" )
      if ( !response.ok ) {
        const errorMessage = `${response.status} ${response.statusText}`
        const error = new Error( errorMessage )
        throw error
      }
      const body = await response.json()
      const newTrips = body.trips
      setTrips( newTrips )
    } catch ( err ) {
      console.error( `Error in Fetch, ${err.message}` )
    }
  }

  useEffect( () => {
    getTrips()
  }, [] )

  const tripTiles = trips.map( ( trip ) => {
    return <TripTile
      key={trip.id}
      trip={trip}
    />
  } )

  return (
    <div>
      <Link to="/trips">
        Trips Page
      </Link>
      {tripTiles}
    </div>
  )
}

export default TripList

