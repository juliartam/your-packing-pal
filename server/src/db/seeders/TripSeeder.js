import {Trip, User} from "../../models/index.js"

class TripSeeder {
  static async seed() {
    const userOne = await User.query().findOne({email: "userOne@testing.com"})
    const userTwo = await User.query().findOne({email: "userTwo@testing.com"})
    const userThree = await User.query().findOne({email: "userThree@testing.com"})

    const tripSeederData = [
      {
        name: "Greece",
        location: "Vouliagmeni, Greece",
        startDate: "September 13, 2023",
        endDate: "September 21, 2023",
        userId: userOne.id
      },
      {
        name: "Skiing",
        location: "Mont-Tremblant, Canada",
        startDate: "December 29, 2023",
        endDate: "January 2, 2024",
        userId: userTwo.id
      },
      {
        name: "Camping",
        location: "Portsmouth, NH",
        startDate: "June 5, 2024",
        endDate: "June 8, 2024",
        userId: userThree.id
      },
      {
        name: "Cape",
        location: "Dennis, MA",
        startDate: "August 1, 2024",
        endDate: "August 8, 2024",
        userId: userThree.id
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

