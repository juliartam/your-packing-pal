import express from "express"
import {Trip} from "../../../models/index.js"
import tripActivitiesRouter from "./tripActivitiesRouter.js"
import objection from "objection"
const {ValidationError} = objection
import cleanUserInput from "../../../services/cleanUserInput.js"

// /ap/v1/trips//jt: all endpoints related to the trips page go here 
const tripsRouter = new express.Router()


//{#000} semi-working, revert back to this if testing doesnt work
// tripsRouter.get("/", async (req, res) => {
//   try {
//     const allTrips = await Trip.query()
//     return res.status(200).json({trips: allTrips})
//   } catch (err) {
//     return res.status(500).json({error: err})
//   }
// })



tripsRouter.get("/", async (req, res) => {
  const currentUserId = req.user.id
  console.log(currentUserId)
  try {
    const currentUserTrips = await Trip.query().where('userId', currentUserId)
    console.log(currentUserTrips)
    return res.status(200).json({trips: currentUserTrips})
  } catch (err) {
    return res.status(500).json({error: err})
  }
})


//{#100} in progress, testing
// tripsRouter.get("/", async (req, res) => {
//   try {
//     const allTrips = await Trip.query().findById(userId)
//     await allTrips.$relatedQuery("users").findById({user: "id"})
//     return res.status(200).json({trips: allTrips})
//   } catch (err) {
//     return res.status(500).json({error: err})
//   }
// })

// tripsRouter.post("/", async (req, res) => {
//   const currentUserId = req.user.id
//   console.log(userId)
//   const formInput = cleanUserInput(req.body)
//   formInput.userId = currentUserId

//   try {
//     const newTrips = await Trip.query().insertAndFetch(formInput)
//     return res.status(201).json({trip: newTrips})
//   } catch (err) {
//     if (err instanceof ValidationError) {
//       return res.status(422).json({errors: err.data})
//     } else {
//       return res.status(500).json({errors: err})
//     }
//   }
// })


tripsRouter.post("/", async (req, res) => {
  const currentUserId = req.user.id
  const formInput = cleanUserInput(req.body)
  formInput.userId = currentUserId

  try {
    const newTrips = await Trip.query().insertAndFetch(formInput)
    return res.status(201).json({trip: newTrips})
  } catch (err) {
    if (err instanceof ValidationError) {
      return res.status(422).json({errors: err.data})
    } else {
      return res.status(500).json({errors: err})
    }
  }
})

tripsRouter.get("/:id", async (req, res) => {
  console.log("Hello")
  const id = req.params.id
  try {
    const trip = await Trip.query().findById(id)
    const activities = await trip.$relatedQuery("activities")
    trip.activities = activities
    return res.status(200).json({trip: trip})
  } catch (err) {
    return res.status(500).json({error: err})
  }
})

tripsRouter.use("/:tripId/activities", tripActivitiesRouter)

export default tripsRouter