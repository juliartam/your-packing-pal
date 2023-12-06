import express from "express"
import {Trip, Activity} from "../../../models/index.js"
import cleanUserInput from "../../../services/cleanUserInput.js"
import objection from "objection"
const {ValidationError} = objection
import ActivitySerializer from '../../../serializers/ActivitySerializer.js'

const tripActivitiesRouter = new express.Router({mergeParams: true})

tripActivitiesRouter.post("/", async (req, res) => {
  console.log("hi")
  // const currentUserId = req.user.id
  const tripId = req.params.tripId
  const formInput = cleanUserInput(req.body)
  // formInput.userId = currentUserId
  formInput.tripId = tripId
  console.log("hi2")
  try {
    const trip = await Trip.query().findById(formInput.tripId)
    const newTripActivity = await trip.$relatedQuery("activities").insertAndFetch(formInput)
    const serializedActivity = ActivitySerializer.getSummary(newTripActivity)
    return res.status(201).json({activity: serializedActivity})
  } catch (err) {
    console.log("a")
    console.log(err)

    if (err instanceof ValidationError) {
      console.log("b")

      return res.status(422).json({errors: err.data})
    } else {
      console.log("c")
      return res.status(500).json({errors: err})
    }
  }
})

export default tripActivitiesRouter