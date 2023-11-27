import {Trip, User} from "../../models/index.js"

class TripSeeder {
  static async seed() {
    const userOne = await User.query().findOne({email: "betty@notreal.com"})

    const tripSeederData = [
      {
        name: "Greece Trip",
        location: "Vouliagmeni, Greece",
        startDate: "September 13, 2023",
        endDate: "September 21, 2023",
        userId: userOne.id
      },
      {
        name: "Ski Trip",
        location: "Mont-Tremblant, Canada",
        startDate: "December 29, 2023",
        endDate: "January 2, 2024",
        userId: userOne.id
      }
    ]
    for (const trip of tripSeederData) {
      const currentTrip = await Trip.query().findOne({name: trip.name})
      if (!currentTrip) {
        await Trip.query().insert(trip)
      }
    }
  }
}
export default TripSeeder;

