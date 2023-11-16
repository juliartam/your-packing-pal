import express from "express"
import { Trip } from "../../../models/index.js"
// import destinationReviewsRouter from "./destinationsReviewRouter.js"
import objection from "objection"
const { ValidationError } = objection
import cleanUserInput from "../../../services/cleanUserInput.js"

const tripsRouter = new express.Router()

tripsRouter.get( "/trips", async ( req, res ) => {
  try {
    const tripsList = await Trip.query()
    return res.status( 200 ).json( { trips: tripsList } )
  } catch ( err ) {
    return res.status( 500 ).json( { error: err } )
  }
} )

// tripsRouter.post( "/", async ( req, res ) => {
//   const formInput = cleanUserInput( req.body )
//   try {
//     const newDestinationFromDestinationTable = await Destination.query().insertAndFetch( formInput )
//     return res.status( 201 ).json( { destination: newDestinationFromDestinationTable } )
//   } catch ( err ) {
//     if ( err instanceof ValidationError ) {
//       return res.status( 422 ).json( { errors: err.data } )
//     } else {
//       return res.status( 500 ).json( { errors: err } )
//     }
//   }
// } )

// tripsRouter.get( "/:id", async ( req, res ) => {
//   const id = req.params.id
//   try {
//     const destination = await Destination.query().findById( id )
//     const relatedReviews = await destination.$relatedQuery( "reviews" )
//     destination.reviews = relatedReviews
//     return res.status( 200 ).json( { destination: destination } )
//   } catch ( err ) {
//     return res.status( 500 ).json( { error: err } )
//   }
// } )

// tripsRouter.use( "/trips", destinationReviewsRouter )

export default tripsRouter