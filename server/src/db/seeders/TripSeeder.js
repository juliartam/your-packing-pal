import { Trip } from "../../models/index.js"

class TripSeeder {
  static async seed() {
    const tripsSeederData = [
      {
        name: "Greece Trip",
        location: "Vouliagmeni, Greece",
        startDate: "September 13, 2023",
        endDate: "September 21, 2023",
        status: "New",
        notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        name: "Mont-Tremblant Ski Trip",
        location: "Mont-Tremblant, Canada",
        startDate: "December 29, 2023",
        endDate: "January 2, 2024",
        status: "New",
        notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      }
    ]
    for ( const trip of tripsSeederData ) {
      const currentTrip = await Trip.query().findOne( { name: trip.name } )
      if ( !currentTrip ) {
        await Trip.query().insert( trip )
      }
    }
  }
}
export default TripSeeder;

