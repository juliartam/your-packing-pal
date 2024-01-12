import {Activity, Trip} from "../../models/index.js"

class ActivitySeeder {
  static async seed() {

    const activityOneGreece = await Trip.query().findOne({name: "Greece"})
    const activityTwoGreece = await Trip.query().findOne({name: "Greece"})
    const activityOneCape = await Trip.query().findOne({name: "Cape"})

    const activitySeederData = [
      {
        name: "Workout",
        tripId: activityOneGreece.id
      },
      {
        name: "Brunch",
        tripId: activityTwoGreece.id
      },
      {
        name: "Beach",
        tripId: activityOneCape.id
      }
    ]
    for (const activity of activitySeederData) {
      const currentActivity = await Activity.query().findOne({name: activity.name})
      if (!currentActivity) {
        await Activity.query().insert(activity)
      }
    }
  }
}
export default ActivitySeeder
