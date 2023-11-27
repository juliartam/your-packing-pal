// import React, {useState, useEffect} from "react"
// import {Link, useParams} from "react-router-dom"
// import TripDayTile from "./TripDayTile"
// import TripTile from "./TripTile"

// //{#000} shows trip details, activities by day, add items
// const ActivityDetail = (props) => {
//   const [activity, setNewActivity] = useState({
//     trips: "",
//     days: [],
//   })

//   const {id, name, location, startDate, endDate, notes, status, days} = trip
//   const {id: tripId} = useParams()

//   const getTrip = async () => {
//     try {
//       const response = await fetch(`/api/v1/trips/${tripId}`)
//       if (!response.ok) {
//         const errorMessage = `${response.status} (${response.statusText})`
//         const error = new Error(errorMessage)
//         throw error
//       }
//       const body = await response.json()
//       const trip = body.trip
//       setTrip(trip)
//     } catch (err) {
//       console.error(`Error in fetch ${err.message}`)
//     }
//   }

//   useEffect(() => {
//     getTrip()
//   }, [])


//   const dayTiles = days.map((day) => {
//     return (
//       <TripDayTile
//         key={day.id}
//         day={day}
//       />
//     )
//   })

//   return (
//     <div className="grid-x grid-margin-x not-nav page-background">
//       <h1 className="page-header cell small-9">Activity: {name}</h1>
//       <h4 className="page-header cell small-9">{location}</h4>
//       <h4 className="page-header cell small-9">{startDate} - {endDate}</h4>
//       {/* <Link to="/trips/day1" className="new-trip custom-button cell auto">
//         Add Items
//       </Link> */}
//       {dayTiles}
//     </div>
//   )
// }

// export default ActivityDetail

// PROBABLY DEFUNCT SINCE IT IS JUST A DUPLICATE OF WHAT IS ON THE TRIP DETAIL PAGE
